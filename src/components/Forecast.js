import React from 'react';
import styled from 'styled-components';
import getIcon from '../helpers/getIcon';
import Spinner from './Spinner';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResultFadeIn from './ResultFadeIn';

const ForecastWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  overflow-x: scroll;
  opacity: 0;
  visibility: hidden;
  animation: ${ResultFadeIn} 0.8s forwards;
`;
const ForecastTitle = styled.h4`
  margin-top: 4rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
`;
const ForecastCard = styled.div`
  padding: 2rem;
  min-width: 27rem;
  max-width: 35rem;
  margin-left: 4rem;
  background-color: rgba(209, 199, 199, 0.2);
  border-radius: 1rem;
  color: white;

  &:first-child {
    margin-left: 0;
  }
`;

const CardDate = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const CardDay = styled.p``;
const CardDetails = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
`;

const CardIconTempWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardIcon = styled.div`
  font-size: 4rem;
`;

const CardTemperatures = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

const CardDescription = styled.p`
  text-align: center;
  padding: 1.5rem;
  margin-top: -2rem;
  font-size: 2.2rem;
`;

const Forecast = ({ data }) => {
  function renderForecast() {
    return data.map((forecast, idx) => (
      <ForecastCard key={forecast.dt}>
        <CardDate>
          <CardDay>{moment.unix(forecast.dt).format('dddd Do MMMM')}</CardDay>
        </CardDate>
        <CardDetails>
          <CardIconTempWrapper>
            <CardIcon>
              <FontAwesomeIcon icon={getIcon(forecast.weather[0].main)} />
            </CardIcon>
            <CardTemperatures>
              {Math.round(forecast.temp.max)}&deg;C / {Math.round(forecast.temp.min)}
              &deg;C
            </CardTemperatures>
          </CardIconTempWrapper>
        </CardDetails>
        <CardDescription>{forecast.weather[0].description}</CardDescription>
      </ForecastCard>
    ));
  }
  if (!data) return <Spinner />;
  return (
    <>
      <ForecastTitle>Forecast</ForecastTitle>
      <ForecastWrapper>{renderForecast()}</ForecastWrapper>
    </>
  );
};

export default Forecast;
