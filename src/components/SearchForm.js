import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FormWrapper = styled.form`
  margin: 2rem auto;
  width: 90%;
  position: relative;
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

const SearchIcon = styled.button`
  border: none;
  background-color: transparent;
  color: grey;
  font-size: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  outline: none;
  border-left: 1px solid grey;
  padding-left: 0.7rem;
`;

const SearchForm = ({ query, setQuery, handleSubmit }) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SearchInput
        autoFocus
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Enter city..."
      />
      <SearchIcon type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </FormWrapper>
  );
};

export default SearchForm;
