import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ size }) => {
  const history = useHistory();

  return (
    <Nav>
      <TitleWrapper>
        <Title onClick={() => history.push('/')}>DigiFinance</Title>
      </TitleWrapper>
      <ul>
        <li>1</li>
      </ul>
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
  color: #000;
`;

const TitleWrapper = styled.div`
  padding: 2.5rem;
  background-color: #182444;
`;

const Title = styled.h1``;
