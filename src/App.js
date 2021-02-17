import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

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
  return (
    <AppWrapper>
      <GlobalStyle />

      <MainHeading>Pogodify</MainHeading>
      <SearchForm />
      <SearchResult />
      <Forecast />
    </AppWrapper>
  );
}

export default App;
