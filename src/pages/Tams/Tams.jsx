import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import TamsArticle from './TamsArticle';
import Balance from './Balance';
import fetchData from '../../service/data-fetch';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';

const Tams = props => {
  // locations
  const location = useLocation();
  const dataIdx = location.state?.clicked;

  // states
  const token = sessionStorage.getItem('token');
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState();
  const value = useContext(OpenContext);

  // fetch data
  const data = new fetchData();
  const getTamWallet = (page, token) => {
    data.getTamWallet(page, token).then(item => setInfo(item));
  };

  const getTamUsers = (page, token) => {
    data.getTamUsers(page, token).then(item => setInfo(item));
  };

  const WALLETDATA = {
    title: 'Wallets',
    data: info,
    page: page,
    setPage: setPage,
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
    data: info,
    page: page,
    setPage: setPage,
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
    <Section className={value.isNavOpened ? '' : 'expand'}>
      <TamsArticle
        format={dataIdx === 1 ? WALLETDATA : USERDATA}
        getData={() => {
          dataIdx === 1 ? getTamWallet(page, token) : getTamUsers(page, token);
        }}
      />
    </Section>
  );
};

export default Tams;

const Section = styled.section`
  position: relative;
  padding-left: 10%;
  transition: all 300ms ease-in-out;

  &.expand {
    padding-left: 0;
  }
`;
