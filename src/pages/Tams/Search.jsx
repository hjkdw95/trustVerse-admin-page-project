import React, { useContext } from 'react';
import Buttons from '../../components/Buttons';
import styled from 'styled-components';
import SearchContext from '../../context/Search.context';

const Search = ({ getData, getSearchResult }) => {
  // context API
  const { controlValue } = useContext(SearchContext);
  const searchedValue = useContext(SearchContext);

  const handleInputChange = e => {
    e.preventDefault();
    controlValue(e.target.value);
  };

  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        getSearchResult();
      }}
    >
      <SearchInput
        type="text"
        placeholder="Search Email..."
        value={searchedValue.searchValue || ''}
        onChange={e => {
          handleInputChange(e);
        }}
      />
      <Buttons title="Search" size="Big" type="submit" />
      <Buttons
        title="Refresh!"
        size="Big"
        type="button"
        clickEvent={e => {
          e.preventDefault();
          getData();
        }}
      />
    </SearchForm>
  );
};

export default React.memo(Search);

const SearchForm = styled.form``;

const SearchInput = styled.input`
  width: 20rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #091023;
`;
