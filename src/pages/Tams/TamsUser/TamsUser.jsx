import React, { useState, useEffect } from 'react';
import TableData from './Table/TableData';
import axios from 'axios';
import fetchData from '../../../service/data-fetch';
import Pagination from './Table/Pagination';
import styled from 'styled-components';

const TamsUser = props => {
  // pagenation 필요..현재는 데이터가 적어서 한번에 데이터 받은 후 client측에서 slice 중 (API 작업 중)
  const data = new fetchData();
  const [info, setInfo] = useState();
  const STANDARD_OFFSET = 7;
  const [pages, setPages] = useState({ limit: 0, offset: STANDARD_OFFSET });

  useEffect(() => {
    data.getTamUsers().then(item => setInfo(item));
  }, []);

  return (
    <Wrapper>
      <H1>Users</H1>
      <Container>
        {info && <TableData info={info} pages={pages} />}
        {info && (
          <Pagination
            info={info}
            pages={pages}
            setPages={setPages}
            STANDARD_OFFSET={STANDARD_OFFSET}
          />
        )}
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
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;
