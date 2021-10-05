import React from 'react';
import styled from 'styled-components';

const TamsUser = props => {
  return (
    <>
      <H1>Users</H1>
    </>
  );
};

export default TamsUser;

const H1 = styled.h1`
  ${({ theme }) => theme.title()}
`;
