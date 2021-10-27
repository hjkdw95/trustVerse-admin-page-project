import React, { useState } from 'react';
import OpenContext from '../../context/Open.context';

const StatusProvider = ({ children }) => {
  const controlNav = () => {
    setNavOpened(prev => {
      return { ...prev, isNavOpened: !prev.isNavOpened };
    });
  };

  const initialState = {
    isNavOpened: true,
    controlNav,
  };
  const [isNavOpened, setNavOpened] = useState(initialState);

  return (
    <OpenContext.Provider value={isNavOpened}>{children}</OpenContext.Provider>
  );
};

export default StatusProvider;
