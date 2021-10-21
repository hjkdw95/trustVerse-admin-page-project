import React, { useState } from 'react';
import AccordianMenu from './AccordianMenu';
import StatusBar from './StatusBar';

const NavBar = props => {
  const [isNavOpened, setNavOpen] = useState(true);

  return (
    <>
      <AccordianMenu isNavOpened={isNavOpened} />
      <StatusBar isNavOpened={isNavOpened} setNavOpen={setNavOpen} />
    </>
  );
};

export default NavBar;
