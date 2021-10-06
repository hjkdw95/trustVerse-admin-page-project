import React, { useEffect, useState } from 'react';
import TableData from './Table/TableData';
import axios from 'axios';
import fetchData from '../../../service/data-fetch';
import styled from 'styled-components';
import Pagination from './Table/Pagination';

const TamsUser = props => {
  // pagenation 필요..현재는 데이터가 적어서 한번에 데이터 받은 후 client측에서 slice 중 (API 작업 중)
  const data = new fetchData();
  const [info, setInfo] = useState();
  const [limit, setLimit] = useState(0);
  const [offSet, setOffset] = useState(7);
  useEffect(() => {
    data.getTamUsers().then(item => setInfo(item));
  }, []);

  return (
    <Wrapper>
      <H1>Users</H1>
      <Container>
        {info && <TableData info={info} offSet={offSet} limit={limit} />}
        {info && <Pagination info={info} offSet={offSet} limit={limit} />}
      </Container>
    </Wrapper>
  );
};

export default TamsUser;

const Wrapper = styled.div`
  padding: 3rem;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
  ${({ theme }) => theme.title()}
`;

const Container = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
