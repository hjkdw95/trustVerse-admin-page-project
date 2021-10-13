import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from './Paging';

const ReportTab = ({ reports, setTabIndex }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(reports.data?.reports.slice(page * 10 - 10, page * 10));
  }, [page]);

  return (
    <div>
      <Title
        onClick={() => {
          setTabIndex(2);
        }}
      >
        All reports
      </Title>
      <ReportTableContainer>
        <ReportTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BRIEF</th>
              <th>COVER</th>
              <th>CONTENT</th>
            </tr>
          </thead>
          <tbody>
            {data.map(goods => {
              return (
                <tr key={goods.report_id}>
                  <td>{goods.report_id}</td>
                  <td>{goods.title}</td>
                  <td>{goods.BRIEF}</td>
                  <td>{goods.COVER}</td>
                  <td>{goods.CONTENT}</td>
                </tr>
              );
            })}
          </tbody>
        </ReportTable>
        Showing {page === 1 ? page : page * 10} to
        {page === 1 ? page * 10 : (page + 1) * 10} of
        {reports.data?.reports.length + 1}
        entries
        <Paging
          page={page}
          count={reports.data?.reports.length}
          setPage={setPage}
        />
      </ReportTableContainer>
    </div>
  );
};

const Title = styled.div`
  font-size: 30px;
  position: absolute;
  top: 70px;
  left: 220px;
  font-weight: bold;
`;

const ReportTableContainer = styled.div`
  width: 1000px;
  padding: 30px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
`;

const ReportTable = styled.table`
  margin: 0 auto;

  thead tr th {
    padding: 14px;
    color: #6f7a92;
    font-size: 14px;
    text-align: left;
  }

  tbody {
    background-color: #f9f9f9;
    color: #6f7a92;
  }

  tbody tr td {
    font-size: 14px;
    padding: 14px;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
    border-top: 20px solid white;

    a {
      font-size: 14px;
    }
  }
`;

export default ReportTab;
