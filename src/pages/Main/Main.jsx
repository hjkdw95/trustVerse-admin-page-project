import React, { useContext, useEffect, useState } from 'react';
import CumulativeSubscription from './CumulativeSubscription';
import UserStatusAppType from './UserStatusAppType';
import UserStatusJoinType from './UserStatusJoinType';
import OpenContext from '../../context/Open.context';
import TotalAccount from './TotalAccount/TotalAccount';
import UserCountry from './UserCountry';
import UserPerApp from './UserPerApp';
import fetchData from '../../service/data-fetch';
import styled from 'styled-components';

const Main = props => {
  const dataFactory = new fetchData();
  const value = useContext(OpenContext);

  const [dashBoardData, setDashBoardData] = useState();

  useEffect(() => {
    dataFactory.getDashBoard().then(data => setDashBoardData(data));
  }, []);

  console.log(dashBoardData);

  return (
    <Section className={value.isNavOpened ? '' : 'expand'}>
      {dashBoardData && (
        <Container>
          <Header>
            <UserPerApp ratio={dashBoardData.User_Appratio} />
            <UserStatusJoinType types={dashBoardData.User_Socialtype} />
            <UserCountry countries={dashBoardData.Country} />
          </Header>
          <Middle>
            <TotalAccount accounts={dashBoardData.Total} />
            <UserStatusAppType appType={dashBoardData.User_App} />
          </Middle>
          <Footer>
            <CumulativeSubscription
              subscriptions={dashBoardData.Monthly_User}
            />
          </Footer>
        </Container>
      )}
    </Section>
  );
};

export default Main;

const Section = styled.section`
  padding-left: 20rem;
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
