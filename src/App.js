import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import moment from 'moment';
import styled from 'styled-components';
import getCurrentWeather from './api/getCurrentWeather';

import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import Forecast from './components/Forecast';
import Spinner from './components/Spinner';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  align-self: center;
  color: white;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await getCurrentWeather({
        params: {
          q: query,
          units: 'metric',
        },
      });
      const weatherData = {
        date: moment(new Date()).format('LLLL'),
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
        description: res.data.weather[0].description,
        pressure: res.data.main.pressure,
      };

      const forecastRes = await setWeather(weatherData);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <AppWrapper>
      <GlobalStyle />
      <MainHeading>Pogodify</MainHeading>
      <SearchForm handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      {weather && <SearchResult data={weather} />}
      {weather && <Forecast />}
    </AppWrapper>
  );
}

export default App;
