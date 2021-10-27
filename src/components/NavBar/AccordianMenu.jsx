import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem/ListItem';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';

const AccordianMenu = props => {
  const history = useHistory();
  const value = useContext(OpenContext);

  const MENU_LIST = [
    { title: 'TAMS', list: ['Users', 'Wallets'] },
    {
      title: 'Jupiter',
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  const handleClick = () => {
    history.push('/');
    setActiveIndex(null);
  };

  return (
    <Nav className={value.isNavOpened ? '' : 'closed'}>
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

export default AccordianMenu;

const Nav = styled.nav`
  width: 20rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f1a34;
  color: #fff;
  overflow-x: hidden;
  z-index: 1000;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 0;
  }

  &.closed {
    width: 0;

    @media screen and (max-width: 1024px) {
      width: 20rem;
      position: absolute;
    }
  }
`;

const TitleWrapper = styled.div`
  padding: 2.9rem 2rem;
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
