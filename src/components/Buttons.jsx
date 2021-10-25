import React from 'react';
import styled from 'styled-components';

const Buttons = ({ title, size, type, clickEvent }) => {
  return (
    <Button className={size} type={type} onClick={clickEvent}>
      {title}
    </Button>
  );
};

export default Buttons;

const Button = styled.button`
  display: inline-block;
  background-color: #373063;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &.Big {
    width: 7rem;
    height: 4.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #373063e6;
  }
`;
