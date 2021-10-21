import React from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

const Pagination = ({ info, page, setPage }) => {
  const handleChange = data => {
    const selected = data.selected + 1;
    setPage(selected);
  };

  const FIRST_PAGE = (page - 1) * 7;
  const LAST_PAGE = FIRST_PAGE + 7;

  return (
    <Wrapper>
      <ListSummary>
        Showing {FIRST_PAGE} to {LAST_PAGE} of {info.total_count} entries
      </ListSummary>
      <PageinationWrapper>
        <ReactPaginate
          previousLabel={<AiOutlineArrowLeft />}
          nextLabel={<AiOutlineArrowRight />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={info.page_count}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={handleChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </PageinationWrapper>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 3rem 0;
`;

const ListSummary = styled.div`
  ${({ theme }) => theme.tableFont()};
  font-weight: 700;
`;

const PageinationWrapper = styled.div`
  .pagination {
    display: flex;

    a {
      margin: 0 0.5rem;
      transition: all 0.5s;
      font-weight: 700;
    }

    li > a {
      display: inline-block;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 0.3rem;
      font-size: 1.4rem;
      text-align: center;
      line-height: 3.2rem;
      color: ${props => props.theme.black};
      cursor: pointer;

      &:hover {
        ${({ theme }) => theme.greenBtn()}
      }
    }

    .active > a {
      ${({ theme }) => theme.greenBtn()}
    }
  }
`;
