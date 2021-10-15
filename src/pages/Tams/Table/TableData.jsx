import React from 'react';
import Table from './Table';

const TableData = ({ data, rowData, pages }) => {
  const { limit, offset } = pages;

  const columns = rowData;

  const tableData = data.slice(limit, offset);

  return <Table columns={columns} data={tableData} />;
};

export default TableData;
