import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(rows);

  return (
    <TableSheet {...getTableProps()}>
      <TableHead>
        {headerGroups.map(header => (
          <Header {...header.getHeaderGroupProps()}>
            {header.headers.map(col => (
              <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>
            ))}
          </Header>
        ))}
      </TableHead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </TableSheet>
  );
};

export default Table;

const TableSheet = styled.table``;

const TableHead = styled.thead`
  padding-bottom: 1rem;
`;

const Header = styled.tr``;

const Th = styled.th`
  padding: 1rem 1.5rem;
  border-bottom: 0.5px solid ${props => props.theme.greyBorder};
  ${({ theme }) => theme.tableFont()};
`;

const Td = styled.td`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.lightGrey};
  border-top: 2rem solid #fff;
  ${({ theme }) => theme.tableFont()};
`;