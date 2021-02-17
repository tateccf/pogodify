import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin: 2rem auto;
  width: 90%;
`;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2rem;
  outline: none;
`;

const SearchForm = () => {
  return (
    <FormWrapper>
      <SearchInput type="text" placeholder="Enter city..." />
    </FormWrapper>
  );
};

export default SearchForm;
