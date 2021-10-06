import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = ({ info, offSet, limit, setLimit, setOffset }) => {
  const handleChange = data => {
    // console.log(data.selected);
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
    <>
      <div>
        Showing {limit + 1} to {limit + 7} of {info.length} entries
      </div>
      <div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={info.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handleChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </>
  );
};

export default Pagination;
