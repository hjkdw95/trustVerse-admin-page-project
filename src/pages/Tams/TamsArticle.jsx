import React, { useEffect } from 'react';
import TableData from './Table/TableData';
import Pagination from '../../utils/Pagination';
import Buttons from '../../components/Buttons';
import styled from 'styled-components';

const TamsArticle = ({ format, getData }) => {
  const { title, page, setPage, data, rowData } = format;

  useEffect(() => {
    getData();
  }, [title, page]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <form>
        <input type="text" />
        <Buttons title="Search" />
      </form>
      <Container>
        {data && (
          <>
            <TableData data={data.trv_user} rowData={rowData} />
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

const Title = styled.h1`
  margin-bottom: 2rem;
  ${({ theme }) => theme.title()}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;
