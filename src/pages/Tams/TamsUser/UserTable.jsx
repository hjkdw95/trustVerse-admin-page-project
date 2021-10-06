import React from 'react';

import styled from 'styled-components';

const Table = ({ info }) => {
  // const keyName = Object.keys(info[0]);

  const HEADERS = [
    'Email',
    'First Name',
    'Last Name',
    'Password',
    'Phone Number',
    'Country',
    'Application',
    'Registered Date',
    'Reference Code',
    'Social Type',
    'Social ID',
    'PWD Edited Date',
  ];

  return (
    <>
      <Header>
        {HEADERS.map(header => (
          <div>{header}</div>
        ))}
      </Header>
    </>
  );
};

export default Table;

const Header = styled.div`
  div {
    text-transform: capitalize;
  }
`;
