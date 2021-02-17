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

const ForecastWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  overflow-x: scroll;
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
  min-width: 100%;
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
const CardWeekday = styled.p`
  margin-right: 1.2rem;
  font-weight: 600;
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
  margin-top: -2rem;
  font-size: 2.2rem;
`;

const Forecast = () => {
  return (
    <>
      <ForecastTitle>Forecast</ForecastTitle>
      <ForecastWrapper>
        <ForecastCard>
          <CardDate>
            <CardWeekday>Wednesday</CardWeekday>
            <CardDay>16/02/2021</CardDay>
          </CardDate>
          <CardDetails>
            <CardIconTempWrapper>
              <CardIcon>
                <FontAwesomeIcon icon={faCloud} />
              </CardIcon>
              <CardTemperatures>-3&deg;C / 4&deg;C</CardTemperatures>
            </CardIconTempWrapper>
          </CardDetails>
          <CardDescription>Cloudy</CardDescription>
        </ForecastCard>
        <ForecastCard>
          <CardDate>
            <CardWeekday>Wednesday</CardWeekday>
            <CardDay>16/02/2021</CardDay>
          </CardDate>
          <CardDetails>
            <CardIconTempWrapper>
              <CardIcon>
                <FontAwesomeIcon icon={faCloud} />
              </CardIcon>
              <CardTemperatures>-3&deg;C / 4&deg;C</CardTemperatures>
            </CardIconTempWrapper>
          </CardDetails>
          <CardDescription>Cloudy</CardDescription>
        </ForecastCard>
      </ForecastWrapper>
    </>
  );
};

export default Forecast;
