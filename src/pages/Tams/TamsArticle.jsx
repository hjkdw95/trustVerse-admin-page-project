import React, { useState, useEffect } from 'react';
import TableData from './Table/TableData';
import Pagination from '../../utils/Pagination';
import styled from 'styled-components';

const TamsArticle = ({ format, getData }) => {
  // pagenation 필요..현재는 데이터가 적어서 한번에 데이터 받은 후 client측에서 slice 중 (API 작업 중)
  const { title, limit, offset, data, rowData } = format;
  const [pages, setPages] = useState({ limit: limit, offset: offset });

  useEffect(() => {
    getData();
  }, [title]);

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

export default TamsArticle;

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
