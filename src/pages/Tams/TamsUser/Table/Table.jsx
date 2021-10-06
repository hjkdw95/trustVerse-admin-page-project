import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <TableHead>
        {headerGroups.map(header => (
          <Header {...header.getHeaderGroupProps()}>
            {header.headers.map(col => (
              <th {...col.getHeaderProps()}>{col.render('Header')}</th>
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
    </table>
  );
};

export default Table;

const TableHead = styled.thead`
  width: 100%;
  margin-bottom: 1rem;
`;

const Header = styled.tr`
  border: 0.5px solid ${props => props.theme.greyBorder};
`;

const Td = styled.td`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.lightGrey};
  ${({ theme }) => theme.tableFont()};
`;
