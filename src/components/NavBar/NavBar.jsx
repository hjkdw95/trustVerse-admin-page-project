import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ListItem from './ListItem/ListItem';

const NavBar = () => {
  const history = useHistory();

  const Menus = ['TAMS', 'Jupiter'];

  return (
    <Nav>
      <TitleWrapper>
        <Title onClick={() => history.push('/')}>DigiFinance</Title>
      </TitleWrapper>
      <Ul>
        {Menus.map((item, idx) => (
          <ListItem item={item} key={idx} />
        ))}
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
  padding: 1rem 0;
  background-color: #0f1a34;
`;

const Li = styled.li`
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
`;
