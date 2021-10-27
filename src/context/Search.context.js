import { createContext } from 'react';

// State need to be managed
const SearchContext = createContext({
  searchValue: '',
  controlValue: () => {},
});

export default SearchContext;
