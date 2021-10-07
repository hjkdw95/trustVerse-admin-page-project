import React, { useState } from 'react';
import TamsUser from './TamsUser/TamsUser';
import TamsWallet from './TamsWallet/TamsWallet';
import axios from 'axios';
import fetchData from '../../service/data-fetch';

const Tams = props => {
  const data = new fetchData();
  const [info, setInfo] = useState();

  const getTamWallet = () => {
    data.getTamWallet().then(item => setInfo(item));
  };

  const getTamUsers = () => {
    data.getTamUsers().then(item => setInfo(item));
  };

  const WALLETDATA = {
    title: 'Wallets',
    limit: 0,
    offset: 7,
    data: info,
    rowData: [
      {
        accessor: 'email',
        Header: 'Email',
      },
      {
        accessor: 'walletID',
        Header: 'Wallet ID',
      },
      {
        accessor: 'coin_list',
        Header: 'Wallet Balance',
      },
      {
        accessor: 'created_at',
        Header: 'Created At',
      },
      {
        accessor: 'edited_at',
        Header: 'Edited At',
      },
    ],
  };

  const USERDATA = {
    title: 'Users',
    limit: 0,
    offset: 7,
    data: info,
    rowData: [
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
  };

  return (
    <>
      <TamsUser format={WALLETDATA} getTamUsers={getTamWallet} />
      {/* <TamsUser format={USERDATA} getTamUsers={getTamUsers} /> */}
    </>
  );
};

export default Tams;
