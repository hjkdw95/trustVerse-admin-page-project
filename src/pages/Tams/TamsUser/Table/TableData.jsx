import React, { useMemo } from 'react';
import Table from './Table';

const TableData = ({ info, offSet, limit }) => {
  const columns = useMemo(
    () => [
      {
        accessor: 'email',
        Header: 'Email',
      },
      {
        accessor: 'f_name',
        Header: 'First Name',
      },
      {
        accessor: 'l_name',
        Header: 'Last Name',
      },
      {
        accessor: 'phone_no',
        Header: 'Phone Number',
      },
      {
        accessor: 'appname',
        Header: 'Application',
      },
      {
        accessor: 'register_datetime',
        Header: 'Registered Date',
      },
      {
        accessor: 'refer_code',
        Header: 'Reference Code',
      },
      {
        accessor: 'social_type',
        Header: 'Social Type',
      },
      {
        accessor: 'social_uuid',
        Header: 'Social ID',
      },
      {
        accessor: 'inactive_user',
        Header: 'Inactive User',
      },
      {
        accessor: 'pwd_edited_date',
        Header: 'PWD Edited Date',
      },
    ],
    []
  );

  const data = useMemo(() => info.slice(limit, offSet), [limit]);

  return <Table columns={columns} data={data} />;
};

export default TableData;
