import React from 'react';
import styled from 'styled-components';
import getIcon from '../helpers/getIcon';
import ResultFadeIn from './ResultFadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResultWrapper = styled.div`
  margin-top: 1rem;
  opacity: 0;
  visibility: hidden;
  animation: ${ResultFadeIn} 0.8s forwards;
  @media screen and (min-width: 480px) {
  }
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
  @media screen and (min-width: 480px) {
    justify-content: center;
  }
`;

const WeatherIcon = styled.div`
  font-size: 8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 480px) {
    font-size: 10rem;
    margin-right: 8rem;
  }
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
  max-width: 45rem;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  justify-items: start;
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

  return (
    <ResultWrapper>
      <CityName>
        {name}, {country}
      </CityName>
      <Date>{date}</Date>
      <CurrentWeather>
        <WeatherIcon>
          <FontAwesomeIcon icon={getIcon(description)} />
        </WeatherIcon>
        <DataContainer>
          <Temperature>{temp}&deg;</Temperature>
          <Description>{description}</Description>
        </DataContainer>
      </CurrentWeather>
      <Details>
        <DetailsItem>High: {high}&deg;C</DetailsItem>
        <DetailsItem>Low: {low}&deg;C</DetailsItem>
        <DetailsItem>Humidity: {humidity}%</DetailsItem>
        <DetailsItem>Press.: {pressure} mb</DetailsItem>
        <DetailsItem>Sunrise: {sunrise}</DetailsItem>
        <DetailsItem>Sunset: {sunset}</DetailsItem>
      </Details>
    </ResultWrapper>
  );
};

export default SearchResult;
