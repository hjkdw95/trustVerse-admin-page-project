import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsWallet2 } from 'react-icons/bs';
import styled from 'styled-components';

const ListItem = ({ item, iconSize, hoverBg, hoverFontColor }) => {
  const history = useHistory();

  const cellStyle = {
    backgroundColor: hoverBg,
    color: hoverFontColor,
  };

  const iconStyle = {
    fontSize: `${iconSize}px`,
  };

  return (
    <Li onClick={() => history.push(`/${item}`)} style={cellStyle}>
      <Icon style={iconStyle}>
        <BsWallet2 />
      </Icon>
      <Menu>{item}</Menu>
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  display: grid;
  grid-template-columns: 2.4rem auto;
  grid-gap: 1rem;
  gap: 1.5rem;
  padding: 1rem 2.5rem;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div``;

const Menu = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
`;
