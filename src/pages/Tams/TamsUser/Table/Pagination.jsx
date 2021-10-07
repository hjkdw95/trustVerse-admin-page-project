import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

const Pagination = ({ info, offSet, limit, setLimit, setOffset }) => {
  const handleChange = data => {
    let selected;
    let newOffset;
    if (data.selected === 0) {
      selected = 0;
      newOffset = 7;
    } else {
      selected = data.selected * 7;
      newOffset = selected + 7;
    }
    setLimit(selected);
    setOffset(newOffset);
  };

  return (
    <Wrapper>
      <ListSummary>
        Showing {limit + 1} to {limit + 7} of {info.length} entries
      </ListSummary>
      <PageinationWrapper>
        <ReactPaginate
          previousLabel={<AiOutlineArrowLeft />}
          nextLabel={<AiOutlineArrowRight />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(info.length / 7)}
          marginPagesDisplayed={2}
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
