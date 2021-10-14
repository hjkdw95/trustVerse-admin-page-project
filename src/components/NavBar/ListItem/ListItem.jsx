import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import styled from 'styled-components';

const ListItem = ({ item, iconSize, hoverBg, hoverFontColor }) => {
  const history = useHistory();
  const [isFocused, setFocused] = useState({
    toBeFocused: '',
    toBeNotFocused: '',
  });

  // const cellStyle = {
  //   backgroundColor: hoverBg,
  //   color: hoverFontColor,
  // };

  // const iconStyle = {
  //   fontSize: `${iconSize}px`,
  // };

  //? 켜진것 꺼진것 분리해야되는데..
  //? 1. 켜진것, 꺼진 것 array 따로 만들어야되려나?
  // const handleClick = e => {
  //   setFocused(prev => {toBeFocused: e.target.className, toBeNotFocused: prev.toBeFocused});
  // };

  return (
    <Li onClick={handleClick} className={item.title}>
      <MenuWrapper>
        <IconWrapper>
          <RiDashboardLine />
        </IconWrapper>
        <Menu>{item.title}</Menu>
      </MenuWrapper>
      {isFocused && (
        <ul>{item.list && item.list.map(menu => <li>{menu}</li>)}</ul>
      )}
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  padding: 1rem 2.5rem 1rem 1rem;

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

const MenuWrapper = styled.div`
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
