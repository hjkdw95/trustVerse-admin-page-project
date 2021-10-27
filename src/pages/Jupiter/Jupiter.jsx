import React, { useState, useEffect, useContext } from 'react';
import ReportTab from './ReportTab';
import fetchData from '../../service/data-fetch';
import axios from 'axios';
import OpenContext from '../../context/Open.context';
import styled from 'styled-components';

const Jupiter = props => {
  const [reports, setReports] = useState([]);
  const data = new fetchData();
  const token = sessionStorage.getItem('token');

  const value = useContext(OpenContext);

  useEffect(() => {
    data.getJupiterReports(token).then(item => setReports(item.reports));
  }, []);

  const getData = () => {
    data.getJupiterReports(token).then(item => setReports(item.reports));
  };

  return (
    <Section className={value.isNavOpened ? '' : 'expand'}>
      <ReportTab reports={reports} getData={getData} />
    </Section>
  );
};
const Section = styled.section`
  position: relative;
  padding-left: 20rem;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  &.expand {
    padding: 0;

    @media screen and (max-width: 1024px) {
      padding-left: 20rem;
    }
  }
`;
export default Jupiter;
