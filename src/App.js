import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import moment from 'moment';
import styled from 'styled-components';
import getCurrentWeather from './api/getCurrentWeather';
import getForecast from './api/getForecast';

import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import Forecast from './components/Forecast';
import Spinner from './components/Spinner';
import NotFound from './components/NotFound';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  align-self: center;
  color: white;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  async function handleSubmit(e) {
    setIsLoading(true);
    setWeather(null);
    setError(null);
    e.preventDefault();
    try {
      const res = await getCurrentWeather({
        params: {
          q: query,
          units: 'metric',
        },
      });

      const weatherData = {
        date: moment().format('dddd Do MMMM, YYYY'),
        name: res.data.name,
        temp: Math.round(res.data.main.temp),
        country: res.data.sys.country,
        low: Math.round(res.data.main.temp_min),
        high: Math.round(res.data.main.temp_max),
        sunrise: new Date(res.data.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4),
        sunset: new Date(res.data.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5),
        humidity: res.data.main.humidity,
        description: res.data.weather[0].main,
        pressure: res.data.main.pressure,
      };

      const forecastRes = await getForecast({
        params: {
          lat: res.data.coord.lat,
          lon: res.data.coord.lon,
        },
      });
      setQuery('');
      setWeather(weatherData);
      setForecast(forecastRes.data.daily.slice(1, -1));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  return (
    <AppWrapper>
      <GlobalStyle />
      <MainHeading>Pogodify</MainHeading>
      <SearchForm handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      {error ? <NotFound msg={error} /> : null}
      {isLoading ? <Spinner /> : null}
      {weather && <SearchResult data={weather} />}
      {weather && <Forecast data={forecast} />}
    </AppWrapper>
  );
}

export default App;
