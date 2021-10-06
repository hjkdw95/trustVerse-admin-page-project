import React from 'react';
import styled from 'styled-components';

const Jupiter = props => {
  return (
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
          <tr>
            <td>149</td>
            <td>JUPITER REPORT 074</td>
            <td>
              Ragnar Digital Investment - October 01, Daily Crypto Market
              Summary
            </td>
            <td>
              <a href="https://tvsjupiterstorage.blob.core.windows.net/reports/Jupiter_report_20211001_.jpg?st=2021-10-06T00%3A57%3A48Z&amp;se=2021-10-06T01%3A27%3A48Z&amp;sp=r&amp;spr=https&amp;sv=2019-02-02&amp;sr=b&amp;sig=WaBkXB3k/SmOf47PGf4SGKFJaNkFzC5W751TWBCqy64%3D">
                Jupiter_report_20211001_.jpg
              </a>
            </td>
            <td>
              <a href="https://tvsjupiterstorage.blob.core.windows.net/reports/Jupiter_report_20211001_.jpg?st=2021-10-06T00%3A57%3A48Z&amp;se=2021-10-06T01%3A27%3A48Z&amp;sp=r&amp;spr=https&amp;sv=2019-02-02&amp;sr=b&amp;sig=WaBkXB3k/SmOf47PGf4SGKFJaNkFzC5W751TWBCqy64%3D">
                Jupiter_report_20211001_.jpg
              </a>
            </td>
          </tr>
          <tr>
            <td>149</td>
            <td>JUPITER REPORT 074</td>
            <td>
              Ragnar Digital Investment - October 01, Daily Crypto Market
              Summary
            </td>
            <td>
              <a href="https://tvsjupiterstorage.blob.core.windows.net/reports/Jupiter_report_20211001_.jpg?st=2021-10-06T00%3A57%3A48Z&amp;se=2021-10-06T01%3A27%3A48Z&amp;sp=r&amp;spr=https&amp;sv=2019-02-02&amp;sr=b&amp;sig=WaBkXB3k/SmOf47PGf4SGKFJaNkFzC5W751TWBCqy64%3D">
                Jupiter_report_20211001_.jpg
              </a>
            </td>
            <td>
              <a href="https://tvsjupiterstorage.blob.core.windows.net/reports/Jupiter_report_20211001_.jpg?st=2021-10-06T00%3A57%3A48Z&amp;se=2021-10-06T01%3A27%3A48Z&amp;sp=r&amp;spr=https&amp;sv=2019-02-02&amp;sr=b&amp;sig=WaBkXB3k/SmOf47PGf4SGKFJaNkFzC5W751TWBCqy64%3D">
                Jupiter_report_20211001_.jpg
              </a>
            </td>
          </tr>
        </tbody>
      </ReportTable>
    </ReportTableContainer>
  );
};

const ReportTableContainer = styled.div`
  padding: 50px;
  margin: 0 auto;
  width: 1000px;
`;

const ReportTable = styled.table`
  margin: 0 auto;

  thead {
    border: gray 1px solid;
  }

  tbody {
    background-color: #f9f9f9;
    color: #6f7a92;
    border-top: white 20px solid;
  }
  tbody tr {
    border-bottom: white 20px solid;
  }
  tbody tr td {
    font-size: 14px;
    padding: 14px;
    font-weight: bold;
    display: table-cell;
    vertical-align: middle;
  }

  thead tr th {
    padding: 14px;
    font-size: 14px;
    color: #9ca4b4;
    text-align: left;
  }
`;
export default Jupiter;
