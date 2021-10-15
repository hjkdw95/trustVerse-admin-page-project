import React, { useState, useEffect } from 'react';
import ReportTab from './ReportTab';
import AddTab from './AddTab';
import DeleteTab from './DeleteTab';
import EditTab from './EditTab';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

const Jupiter = props => {
  const [reports, setReports] = useState([]);
  const [tabIndex, setTabIndex] = useState(1);
  const data = new fetchData();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    data.getJupiterReports(token).then(item => setReports(item.reports));
  }, []);

  const MAPPING_JupiterTab = {
    1: <ReportTab reports={reports} setTabIndex={setTabIndex} />,
    2: <AddTab setTabIndex={setTabIndex} />,
    3: <DeleteTab setTabIndex={setTabIndex} />,
    4: <EditTab setTabIndex={setTabIndex} />,
  };

  return <div>{MAPPING_JupiterTab[tabIndex]}</div>;
};

export default Jupiter;
