import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from './Paging';

const ReportTab = ({ reports, setTabIndex }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(reports.slice(page * 10 - 10, page * 10));
  }, [page, reports]);

  return (
    <Section>
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
            {data?.map(goods => {
              return (
                <tr key={goods.report_id}>
                  <td>{goods.report_id}</td>
                  <td>{goods.title}</td>
                  <td>{goods.brief}</td>
                  <td>
                    <a href={goods.cover_link}>{goods.cover}</a>
                  </td>
                  <td>
                    <a href={goods.content_link}>{goods.content}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ReportTable>
        <PageIndex>
          Showing {page === 1 ? 1 : page - 1 + '1'} to &nbsp;{page * 10} of
          &nbsp;{reports.length + 1}
        </PageIndex>
        <Paging page={page} count={reports.length} setPage={setPage} />
      </ReportTableContainer>
    </Section>
  );
};
const Section = styled.div`
  position: relative;
  padding-left: 15%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 60px;
  margin-top: 100px;
  margin-bottom: 20px;
`;

const ReportTableContainer = styled.div`
  width: 1100px;
  padding: 30px;
  margin: 0 auto;
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

const PageIndex = styled.div`
  font-size: 15px;
  position: relative;
  top: 20px;
  color: #6f7a92;
  width: 300px;
`;

export default ReportTab;
