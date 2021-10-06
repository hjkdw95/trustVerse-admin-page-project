import React, { useEffect, useState } from 'react';
import TableData from './Table/TableData';
import axios from 'axios';
import fetchData from '../../../service/data-fetch';
import styled from 'styled-components';

const TamsUser = props => {
  const data = new fetchData();
  const [info, setInfo] = useState();

  useEffect(() => {
    data.getTamUsers().then(item => setInfo(item));
  }, []);

  return (
    <>
      <H1>Users</H1>
      {info && <TableData info={info} />}
    </>
  );
};

export default TamsUser;

const H1 = styled.h1`
  ${({ theme }) => theme.title()}
`;
