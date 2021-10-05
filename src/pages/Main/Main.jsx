import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const Main = props => {
  return <Div>hi</Div>;
};

export default Main;

const Div = styled.div`
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};
`;
