import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ListItem from './ListItem/ListItem';

const NavBar = () => {
  const history = useHistory();

  const MENU_LIST = [
    { title: 'TAMS', list: ['Users', 'Wallets'] },
    { title: 'Jupiter', list: ['Create', 'Read', 'Update', 'Delete'] },
  ];

  const [activeIndex, setActiveIndex] = useState();

  const handleClick = () => {
    history.push('/');
    setActiveIndex(null);
  };

  return (
    <Nav>
      <TitleWrapper>
        <Title onClick={handleClick}>DigiFinance</Title>
      </TitleWrapper>
      <Ul>
        {MENU_LIST.map((item, idx) => {
          const active = idx === activeIndex ? 'active' : '';
          return (
            <ListItem
              title={item.title}
              idx={idx}
              key={idx}
              list={item.list}
              active={active}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </Ul>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f1a34;
  color: #fff;
  overflow-x: hidden;
  z-index: 1000;
`;

const TitleWrapper = styled.div`
  padding: 2.5rem;
  background-color: #182444;
`;

const Title = styled.h1`
  font-size: 2.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  background-color: #0f1a34;
  overflow-y: auto;
`;
