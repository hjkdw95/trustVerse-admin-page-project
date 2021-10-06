import React, { useState, useEffect } from 'react';
import ReportTab from './ReportTab';
import AddTab from './AddTab';
import DeleteTab from './DeleteTab';
import EditTab from './EditTab';

const Jupiter = props => {
  const [reports, setReports] = useState({});
  const [tabIndex, setTabIndex] = useState(4);
  useEffect(() => {
    fetch('/data/jupiterData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setReports({
          data,
        });
      });
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
