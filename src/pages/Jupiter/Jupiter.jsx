import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ReportTab from './ReportTab';
import AddTab from './AddTab';
import DeleteTab from './DeleteTab';
import EditTab from './EditTab';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

const Jupiter = props => {
  const [reports, setReports] = useState([]);
  const data = new fetchData();
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  const dataIdx = location.state?.clicked;

  useEffect(() => {
    data.getJupiterReports(token).then(item => setReports(item.reports));
  }, []);

  const MAPPING_JupiterTab = {
    1: <ReportTab reports={reports} />,
    2: <AddTab />,
    3: <DeleteTab />,
    4: <EditTab />,
  };

  return <div>{MAPPING_JupiterTab[dataIdx ? dataIdx + 1 : 1]}</div>;
};

export default Jupiter;
