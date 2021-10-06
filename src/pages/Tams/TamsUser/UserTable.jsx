import React, { useState } from 'react';
import TableHeader from './Table/TableHeader';
import styled from 'styled-components';

const Table = ({ info }) => {
  const [currentID, setCurrentID] = useState();
  const [isClicked, setClick] = useState(false);
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

  const handleClick = () => {
    setClick(!isClicked);
  };

  return (
    <TableWrapper>
      <TableHead>
        <Header role="row">
          {HEADERS.map((header, idx) => (
            <TableHeader header={header} key={idx} />
          ))}
        </Header>
      </TableHead>
      <tbody></tbody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
  background-color: #fff;
`;

const TableHead = styled.thead`
  width: 100%;
  margin-bottom: 1rem;
`;

const Header = styled.tr`
  display: flex;
  justify-content: space-between;
`;
