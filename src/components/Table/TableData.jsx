import React from 'react';
import Table from './Table';

const TableData = ({ data, rowData }) => {
  const columns = rowData;

  const tableData = data;

  return <Table columns={columns} data={tableData} />;
};

export default React.memo(TableData);
