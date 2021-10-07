import React, { useState, useEffect } from 'react';
import TableData from './Table/TableData';
import axios from 'axios';
import fetchData from '../../../service/data-fetch';
import Pagination from '../../../utils/Pagination';
import styled from 'styled-components';

const TamsUser = ({ format, getTamUsers }) => {
  // pagenation 필요..현재는 데이터가 적어서 한번에 데이터 받은 후 client측에서 slice 중 (API 작업 중)
  const { title, limit, offset, data, rowData } = format;
  const [pages, setPages] = useState({ limit: limit, offset: offset });

  useEffect(() => {
    getTamUsers();
  }, []);

  return (
    <Wrapper>
      <H1>{title}</H1>
      <Container>
        {data && <TableData data={data} pages={pages} rowData={rowData} />}
        {data && (
          <Pagination
            info={data}
            pages={pages}
            setPages={setPages}
            STANDARD_OFFSET={offset}
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
