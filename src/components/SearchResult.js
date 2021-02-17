import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faSnowflake,
  faSun,
  faSmog,
  faCloudSun,
  faCloudSunRain,
} from '@fortawesome/free-solid-svg-icons';

const ResultWrapper = styled.div`
  margin-top: 1rem;
`;
const CityName = styled.h2`
  font-size: 3rem;
  color: #fff;
`;

const Date = styled.p`
  color: #fff;
  font-size: 1.5rem;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const WeatherIcon = styled.div`
  font-size: 8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Temperature = styled.p`
  font-size: 6rem;
  font-weight: 500;
`;
const Description = styled.p`
  font-size: 2.5rem;
`;

const Details = styled.div`
  margin: 0 auto;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  justify-items: center;
  background-color: rgba(209, 199, 199, 0.2);
  border-radius: 1rem;
`;

const DetailsItem = styled.p`
  padding: 1rem;
`;

const SearchResult = ({ data }) => {
  const {
    country,
    date,
    description,
    high,
    humidity,
    low,
    name,
    sunrise,
    sunset,
    temp,
    pressure,
  } = data;

  console.log(description);

  function getIcon() {
    if (description === 'clear sky') return faSun;
    if (description === 'scattered clouds') return faCloud;
    if (description === 'few clouds') return faCloudSun;
    if (description === 'broken clouds') return faCloud;
    if (description === 'shower rain') return faCloudSunRain;
    if (description === 'rain') return faCloudRain;
    if (description === 'thunderstorm') return faBolt;
    if (description === 'snow') return faSnowflake;
    if (description === 'mist') return faSmog;
  }

  return (
    <ResultWrapper>
      <CityName>
        {name}, {country}
      </CityName>
      <Date>{date}</Date>
      <CurrentWeather>
        <WeatherIcon>
          <FontAwesomeIcon icon={getIcon()} />
        </WeatherIcon>
        <DataContainer>
          <Temperature>{temp}&deg;</Temperature>
          <Description>{description}</Description>
        </DataContainer>
      </CurrentWeather>
      <Details>
        <DetailsItem>High: {high}&deg;C</DetailsItem>
        <DetailsItem>Low: -2&deg;C</DetailsItem>
        <DetailsItem>Humidity: {humidity}%</DetailsItem>
        <DetailsItem>Press.: {pressure} mb</DetailsItem>
        <DetailsItem>Sunrise: {sunrise}</DetailsItem>
        <DetailsItem>Sunset: {sunset}</DetailsItem>
      </Details>
    </ResultWrapper>
  );
};

export default SearchResult;
