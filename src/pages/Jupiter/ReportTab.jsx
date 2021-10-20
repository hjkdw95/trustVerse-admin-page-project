import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from './Paging';

const ReportTab = ({ reports }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(reports?.slice(page * 10 - 10, page * 10));
  }, [page, reports]);

  return (
    <Section>
      <Title>All reports</Title>
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
          &nbsp;{reports?.length + 1}
        </PageIndex>
        <Paging page={page} count={reports?.length} setPage={setPage} />
      </ReportTableContainer>
    </Section>
  );
};

const Section = styled.div`
  padding: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  ${({ theme }) => theme.title()}
`;

const ReportTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
`;

const ReportTable = styled.table`
  margin: 0 auto;

  thead tr th {
    padding: 1.4rem;
    color: #6f7a92;
    font-size: 1.4rem;
    text-align: left;
  }

  tbody {
    background-color: #f9f9f9;
    color: #6f7a92;
  }

  tbody tr td {
    font-size: 1.4rem;
    padding: 1.4rem;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
    border-top: 2rem solid white;

    a {
      font-size: 1.4rem;
    }
  }
`;

const PageIndex = styled.div`
  font-size: 1.5rem;
  position: relative;
  top: 2rem;
  color: #6f7a92;
  width: 30rem;
`;

export default ReportTab;
