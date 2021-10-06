import React from 'react';

const Pagination = ({ info, offSet, limit }) => {
  return (
    <>
      <div>
        Showing {limit + 1} to {limit + offSet} of {info.length} entries
      </div>
      <div>{}</div>
    </>
  );
};

export default Pagination;
