import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Loader type="Oval" color="#fff" height={50} width={50} />
    </SpinnerContainer>
  );
};

export default Spinner;
