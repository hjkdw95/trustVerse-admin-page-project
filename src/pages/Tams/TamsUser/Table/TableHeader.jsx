import React, { useState } from 'react';
import styled from 'styled-components';

const TableHeader = ({ header }) => {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClicked);
  };

  return (
    <Title
      role="column"
      onClick={handleClick}
      className={isClicked ? 'bold' : ''}
    >
      {header}
    </Title>
  );
};

export default TableHeader;

const Title = styled.th`
  padding: 1.5rem;
  border-top: 0.5px solid ${props => props.theme.greyBorder};
  border-bottom: 0.5px solid ${props => props.theme.greyBorder};
  ${({ theme }) => theme.tableFont()}
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;

  &:first-child {
    border-left: 0.5px solid ${props => props.theme.greyBorder};
  }

  &:last-child {
    border-right: 0.5px solid ${props => props.theme.greyBorder};
  }

  &.bold {
    font-weight: 700;
  }
`;
