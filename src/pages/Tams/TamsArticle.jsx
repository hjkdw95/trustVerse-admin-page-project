import React, { useEffect } from 'react';
import TableData from '../../components/Table/TableData';
import Pagination from '../../utils/Pagination';
import Buttons from '../../components/Buttons';
import styled from 'styled-components';

const TamsArticle = ({
  format,
  getData,
  setValue,
  searchValue,
  getSearchResult,
}) => {
  const { title, page, page_count, setPage, data, rowData } = format;

  useEffect(() => {
    getData();
  }, [title, page]);

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <SearchForm
          onSubmit={e => {
            e.preventDefault();
            getSearchResult();
          }}
        >
          <SearchInput
            type="text"
            placeholder="Search Email..."
            value={searchValue}
            onChange={handleChange}
          />
          <Buttons title="Search" size="Big" type="submit" />
          <Buttons
            title="Refresh!"
            size="Big"
            type="button"
            clickEvent={e => {
              e.preventDefault();
              getData();
            }}
          />
        </SearchForm>
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

const SearchForm = styled.form``;

const SearchInput = styled.input`
  width: 20rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #091023;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;
