import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import ReportTab from './ReportTab';
import AddTab from './AddTab';
import DeleteTab from './DeleteTab';
import EditTab from './EditTab';
import fetchData from '../../service/data-fetch';
import axios from 'axios';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';

const Jupiter = props => {
  const [reports, setReports] = useState([]);
  const data = new fetchData();
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  const dataIdx = location.state?.clicked;

  const value = useContext(OpenContext);

  useEffect(() => {
    data.getJupiterReports(token).then(item => setReports(item.reports));
  }, [reports]);

  const MAPPING_JupiterTab = {
    1: <ReportTab reports={reports} />,
    2: <AddTab />,
    3: <DeleteTab />,
    4: <EditTab />,
  };

  return (
    <Section className={value.isNavOpened ? '' : 'expand'}>
      {MAPPING_JupiterTab[dataIdx ? dataIdx + 1 : 1]}
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
