import React from 'react';
import styled from 'styled-components';

const ReportTab = ({ reports, setTabIndex }) => {
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
            {reports.data?.reports.map(goods => {
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
  padding: 30px;
  margin: 0 auto;
  width: 1000px;
  background-color: white;
  margin-top: 100px;
`;

const ReportTable = styled.table`
  margin: 0 auto;

  thead tr th {
    padding: 14px;
    font-size: 14px;
    color: #6f7a92;
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
