import React, { useState } from 'react';
import TamsArticle from './TamsArticle';
import Balance from './Balance';
import fetchData from '../../service/data-fetch';
import axios from 'axios';
import styled from 'styled-components';

const Tams = props => {
  const data = new fetchData();
  const [info, setInfo] = useState();

  // console.log(info?.find(el => el.email === '11'));

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
        Cell: ({ cell: { value } }) => <Balance values={value} data={info} />,
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
    <Section>
      <TamsArticle format={WALLETDATA} getData={getTamWallet} />
    </Section>
  );
};

export default Tams;

const Section = styled.section`
  position: relative;
  padding-left: 15%;
`;
