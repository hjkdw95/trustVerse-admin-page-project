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
      <TitleWrapper>
        <Title>{title}</Title>
        <form>
          <SearchInput type="text" placeholder="Search..." />
          <Buttons title="Search" size="Big" />
        </form>
      </TitleWrapper>

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.title()}
`;

const SearchInput = styled.input`
  width: 20rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #091023;
  margin-right: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;
