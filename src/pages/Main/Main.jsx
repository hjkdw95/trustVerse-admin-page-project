import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import CumulativeSubscription from './CumulativeSubscription';
import UserStatusAppType from './UserStatusAppType';
import UserStatusJoinType from './UserStatusJoinType';
const Main = props => {
  return (
    <Div>
      <UserStatusAppType />
      <UserStatusJoinType />
      <CumulativeSubscription />
    </Div>
  );
};

export default Main;

const Div = styled.div`
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};
`;
