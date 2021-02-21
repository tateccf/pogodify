import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ResultFadeIn from './ResultFadeIn';

const NotFoundWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  border-radius: 10px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  animation: ${ResultFadeIn} 0.5s forwards;
`;

const NotfoundIcon = styled.span`
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  margin-right: 10px;
`;

const NotFoundText = styled.span`
  color: #ffffff;
  font-size: 17px;
`;

const NotFound = ({ msg }) => {
  function errorMessage() {
    if (msg.includes('404')) {
      return `We couldn't find that location. Please check and try again.`;
    } else {
      return msg;
    }
  }
  return (
    <NotFoundWrapper>
      <NotfoundIcon>
        <FontAwesomeIcon icon={faFrown} />
      </NotfoundIcon>
      <NotFoundText>{errorMessage()}</NotFoundText>
    </NotFoundWrapper>
  );
};

export default NotFound;
