import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import styled from 'styled-components';

const ListItem = ({ item, iconSize, hoverBg, hoverFontColor }) => {
  const history = useHistory();

  // const cellStyle = {
  //   backgroundColor: hoverBg,
  //   color: hoverFontColor,
  // };

  // const iconStyle = {
  //   fontSize: `${iconSize}px`,
  // };

  return (
    <Li className={item.title} className="focused">
      <FirstMenu>
        <IconWrapper>
          <RiDashboardLine />
        </IconWrapper>
        <Menu>{item.title}</Menu>
      </FirstMenu>
      <SecondMenu>
        {item.list && item.list.map(menu => <li>{menu}</li>)}
      </SecondMenu>
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  padding: 1rem 2.5rem 1rem 1rem;
  list-style: none;

  &:hover {
    cursor: pointer;
    background-color: #091023;
    color: #acb6c4;
  }

  &.focused {
    background-color: #091023;
    color: #acb6c4;
  }
`;

const FirstMenu = styled.div`
  display: grid;
  grid-template-columns: 2.4rem auto;
  grid-gap: 1.5rem;
  gap: 1.5rem;
  align-items: center;

  &::after {
    position: absolute;
    right: 2rem;
    content: '▸';
  }
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
`;

const Menu = styled.div`
  font-size: 1.6rem;
`;

const SecondMenu = styled.ul`
  padding-left: 4rem;

  li {
    font-size: 1.4rem;
    padding: 1rem;
  }
`;
