import React from 'react';
import styled from 'styled-components';

const Buttons = ({ title, clickAction }) => {
  return (
    <Button type="button" onClick={clickAction}>
      {title}
    </Button>
  );
};

export default Buttons;

const Button = styled.button`
  display: inline-block;
  background-color: #373063;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #373063e6;
  }
`;
