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
      <Container>
        <Header>
          <UserPerApp />
          <UserStatusJoinType />
          <UserCountry />
        </Header>
        <Middle>
          <TotalAccount />
          <UserStatusAppType />
        </Middle>
        <Footer>
          <CumulativeSubscription />
        </Footer>
      </Container>
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

const Container = styled.div`
  display: grid;
  grid-template-rows: 400px 400px 400px;
  gap: 20px 20px;
  margin-top: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;
`;

const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 20px;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 20px;
`;
