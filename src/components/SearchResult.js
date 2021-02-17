import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
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

const SearchResult = () => {
  return (
    <ResultWrapper>
      <CityName>Warsaw, PL</CityName>
      <Date>Monday, 15th February</Date>
      <CurrentWeather>
        <WeatherIcon>
          <FontAwesomeIcon icon={faSnowflake} />
        </WeatherIcon>
        <DataContainer>
          <Temperature>-4&deg;</Temperature>
          <Description>Snow</Description>
        </DataContainer>
      </CurrentWeather>
      <Details>
        <DetailsItem>High: 5&deg;C</DetailsItem>
        <DetailsItem>Low: -2&deg;C</DetailsItem>
        <DetailsItem>Humidity: 95%</DetailsItem>
        <DetailsItem>Rain: 90%</DetailsItem>
        <DetailsItem>Sunrise: 07:23</DetailsItem>
        <DetailsItem>Sunset: 19:28</DetailsItem>
      </Details>
    </ResultWrapper>
  );
};

export default SearchResult;
