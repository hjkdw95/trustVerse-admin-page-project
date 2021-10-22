import React, { useEffect, useState } from 'react';
import TableData from '../../components/Table/TableData';
import Pagination from '../../utils/Pagination';
import styled from 'styled-components';

const TamsArticle = ({ format, getData }) => {
  const { title, page, setPage, data, rowData } = format;

  useEffect(() => {
    getData();
  }, [title, page]);

  return (
    <Wrapper>
      <H1>{title}</H1>
      <Container>
        {data && (
          <>
            <TableData data={data} rowData={rowData} />
            <Pagination info={data} page={page} setPage={setPage} />
          </>
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
