import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin: 2rem auto;
  width: 90%;
`;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  padding-left: 3.5rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -1px;
  color: grey;

  &:focus {
    transform: scale(1.05);
  }
  &::placeholder {
    font-size: 1.6rem;
  }
`;

const SearchForm = () => {
  return (
    <FormWrapper>
      <SearchInput type="text" placeholder="Enter city..." />
    </FormWrapper>
  );
};

export default SearchForm;
