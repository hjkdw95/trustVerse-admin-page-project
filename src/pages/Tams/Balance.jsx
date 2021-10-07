import React from 'react';
import styled from 'styled-components';

const Balance = ({ values }) => {
  return (
    <>
      {values.map((coin, idx) => {
        return <Tags key={idx}>{coin}</Tags>;
      })}
    </>
  );
};

export default Balance;

const Tags = styled.span`
  background-color: #00d82c;
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
`;
