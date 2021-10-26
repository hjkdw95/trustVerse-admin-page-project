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
  padding-left: 10%;
  transition: all 300ms ease-in-out;

  &.expand {
    padding: 0;
  }
`;
export default Jupiter;
