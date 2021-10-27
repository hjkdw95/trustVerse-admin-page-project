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
          <div className="grid">
            <UserPerApp ratio={dashBoardData.User_Appratio} />
          </div>
          <div className="grid">
            <UserStatusJoinType types={dashBoardData.User_Socialtype} />
          </div>
          <div className="grid">
            <UserCountry countries={dashBoardData.Country} />
          </div>
          <div className="grid">
            <TotalAccount accounts={dashBoardData.Total} />
          </div>
          <div className="grid">
            <UserStatusAppType appType={dashBoardData.User_App} />
          </div>
          <div className="grid">
            <CumulativeSubscription
              subscriptions={dashBoardData.Monthly_User}
            />
          </div>
        </Container>
      )}
    </Section>
  );
};

export default Main;

const Section = styled.section`
  padding-left: 20rem;
  transition: all 300ms ease-in-out;
  ${({ theme }) => theme.title()};

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  &.expand {
    padding-left: 0;

    @media screen and (max-width: 1024px) {
      padding-left: 20rem;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.25fr);
  grid-template-columns: repeat(6, 0.5fr);
  gap: 20px 20px;
  padding: 3rem;

  .grid {
    &:nth-child(1) {
      grid-column: 1 / span 2;
    }
    &:nth-child(2) {
      grid-column: 3 / span 2;
    }
    &:nth-child(3) {
      grid-column: 5 / span 2;
    }
    &:nth-child(4) {
      grid-column: 1 / span 3;
    }
    &:nth-child(5) {
      grid-column: 4 / span 3;
    }
    &:nth-child(6) {
      grid-column: 1 / 7;
    }
  }
`;
