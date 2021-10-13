import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Paging = ({ page, count, setPage }) => {
  return (
    <Div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
        onChange={setPage}
      />
    </Div>
  );
};
const Div = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    background-color: #19bc9b;

    &:hover {
      cursor: pointer;
      background-color: #0e7864;
    }
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: white;
    font-size: 15px;
  }

  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #0e7864;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
export default Paging;
