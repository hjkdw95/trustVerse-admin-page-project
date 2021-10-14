import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ label, size, background, fontWeight, margin, padding }) => {
  const history = useHistory();

  const Menus = ['TAMS', 'Jupiter'];

  const style = {
    fontSize: `${size}px`,
    fontWeight,
    paddingTop: padding,
  };

  return (
    <Nav>
      <TitleWrapper>
        <Title onClick={() => history.push('/')}>DigiFinance</Title>
      </TitleWrapper>
      <Ul>
        {Menus.map((item, idx) => (
          <Li key={idx} style={style}>
            {item}
          </Li>
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
`;

const TitleWrapper = styled.div`
  padding: 2.5rem;
  background-color: #182444;
`;

const Title = styled.h1`
  font-size: 2.5rem;
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
