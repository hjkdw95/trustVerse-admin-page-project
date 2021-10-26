import React, { useEffect } from 'react';
import TableData from '../../components/Table/TableData';
import Pagination from '../../utils/Pagination';
import styled from 'styled-components';
import Search from './Search';

const TamsArticle = ({ format, getData, getSearchResult }) => {
  const { title, page, page_count, setPage, data, rowData } = format;

  useEffect(() => {
    getData();
  }, [title, page]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Search getData={getData} getSearchResult={getSearchResult} />
      </TitleWrapper>
      <Container>
        {data && (
          <>
            <TableData data={data} rowData={rowData} />
            <Pagination
              info={data}
              page={page}
              setPage={setPage}
              page_count={page_count}
            />
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.title()}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;
