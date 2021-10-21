import { createContext } from 'react';

// State need to be managed
const OpenContext = createContext({
  isNavOpened: true,
  controlNav: () => {},
});

export default OpenContext;
