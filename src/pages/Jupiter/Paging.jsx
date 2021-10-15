import React from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
const Paging = ({ page, count, setPage }) => {
  const handleChange = e => {
    setPage(e.selected + 1);
  };

  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={count / 10}
        marginPagesDisplayed={0}
        pageRangeDisplayed={6}
        onPageChange={handleChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: right;

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

export default Paging;
