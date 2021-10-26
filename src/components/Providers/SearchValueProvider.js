import React, { useState } from 'react';
import SearchContext from '../../context/Search.context';

const SearchValueProvider = ({ children }) => {
  const controlValue = letters => {
    setSearchValue(letters);
  };

  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, controlValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchValueProvider;
