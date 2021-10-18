import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem/ListItem';
import styled from 'styled-components';

const NavBar = () => {
  const history = useHistory();

  const MENU_LIST = [
    { title: 'TAMS', list: ['Users', 'Wallets'] },
    { title: 'Jupiter', list: ['All reports', 'Add', 'Delete', 'Edit'] },
  ];

  const [activeIndex, setActiveIndex] = useState();

  const handleClick = () => {
    history.push('/');
    setActiveIndex(null);
  };

const NavBar = props => {
  return (
    <>
      <AccordianMenu />
      <StatusBar />
    </>
  );
};

export default NavBar;
