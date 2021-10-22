import React, { useContext } from 'react';
import CumulativeSubscription from './CumulativeSubscription';
import UserStatusAppType from './UserStatusAppType';
import UserStatusJoinType from './UserStatusJoinType';
import OpenContext from '../../context/Open.context';
import TotalAccount from './TotalAccount/TotalAccount';
import UserCountry from './UserCountry';
import UserPerApp from './UserPerApp';
import styled from 'styled-components';

const Main = props => {
  const value = useContext(OpenContext);

  return (
    <Section className={value.isNavOpened ? '' : 'expand'}>
      <TotalAccount />
      <UserCountry />
      <UserPerApp />
      <UserStatusAppType />
      <UserStatusJoinType />
      <CumulativeSubscription />
    </Section>
  );
};

export default Main;

const Section = styled.section`
  padding-left: 10%;
  transition: all 300ms ease-in-out;
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};

  &.expand {
    padding-left: 0;
  }
`;
