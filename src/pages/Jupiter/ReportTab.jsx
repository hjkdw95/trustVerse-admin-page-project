import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from './Paging';
import AddTab from './AddTab';
import EditTab from './EditTab';

const ReportTab = ({ reports, getData }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState([false, false]);
  const [reportId, setReportId] = useState('');
  useEffect(() => {
    setData(reports?.slice(page * 10 - 10, page * 10));
  }, [page, reports]);

  const openModal = (e, id) => {
    if (e.target.name === 'Edit') {
      setShowModal([false, true]);
      setReportId(id);
    } else {
      setShowModal([true, false]);
    }
  };

  const closeModal = () => {
    setShowModal([false, false]);
  };

  const deleteReport = (id, title) => {
    if (window.confirm(`${title} 정말로 삭제하시겠습니까?`)) {
      fetch('http://192.168.1.238:8000/jupiter/delete', {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
        body: JSON.stringify({
          report_id: id,
        }),
      });
      setTimeout(() => {
        getData();
      }, 1500);
    }
  };

  return (
    <Section>
      <Title>All reports</Title>
      <AddBnt onClick={openModal}>Report Add</AddBnt>
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
                  <td class="id">{goods.report_id}</td>
                  <td class="title">{goods.title}</td>
                  <td class="brief">{goods.brief}</td>
                  <td class="cover">
                    <a href={goods.cover_link}>{goods.cover}</a>
                  </td>
                  <td class="content">
                    <a href={goods.content_link}>{goods.content}</a>
                  </td>
                  <td class="button">
                    <button
                      onClick={() => {
                        deleteReport(goods.report_id, goods.title);
                      }}
                      name="Delete"
                    >
                      Delete
                    </button>
                  </td>
                  <td class="button">
                    <button
                      onClick={e => {
                        openModal(e, goods.report_id);
                      }}
                      name="Edit"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ReportTable>
        <AddTab
          showModal={showModal}
          closeModal={closeModal}
          getData={getData}
        ></AddTab>
        <EditTab
          showModal={showModal}
          closeModal={closeModal}
          reportId={reportId}
          getData={getData}
        ></EditTab>
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

const AddBnt = styled.button`
  left: 1320px;
  top: 110px;
  height: 30px;
  border-radius: 3px;
  margin-bottom: 1rem;
  ${({ theme }) => theme.greenBtn()}

  &:hover {
    cursor: pointer;
  }
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
  .title {
    min-width: 226.55px;
  }
  .brief {
    min-width: 286px;
  }
  .cover {
    min-width: 208px;
  }
  .content {
    min-width: 258px;
    a {
      max-width: 208px;
    }
  }
  tbody {
    background-color: #f9f9f9;
    color: #6f7a92;
  }

  tbody button {
    ${({ theme }) => theme.greenBtn()}

    &:hover {
      cursor: pointer;
    }
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
