import React, { useMemo } from 'react';
import Table from './Table';

const TableData = ({ data, rowData, pages }) => {
  const { limit, offset } = pages;

  const columns = useMemo(() => rowData, []);

  const tableData = useMemo(() => data.slice(limit, offset), [limit]);

  return <Table columns={columns} data={tableData} />;
};

export default TableData;
