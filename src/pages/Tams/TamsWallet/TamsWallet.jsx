import React, { useEffect, useState } from 'react';
import WalletData from './WalletData';
import Pagination from '../../../utils/Pagination';
import styled from 'styled-components';

const TamsWallet = ({ format, getTamWallet }) => {
  const { title, data, limit, offset, rowData } = format;
  const [pages, setPages] = useState({ limit: limit, offset: offset });

  useEffect(() => {
    getTamWallet();
  }, []);

  return (
    <Wrapper>
      <H1>{title}</H1>
      {data && <WalletData data={data} rowData={rowData} pages={pages} />}
      {data && (
        <Pagination
          info={data}
          pages={pages}
          setPages={setPages}
          STANDARD_OFFSET={offset}
        />
      )}
    </Wrapper>
  );
};

export default TamsWallet;

const Wrapper = styled.div`
  padding: 3rem;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
  ${({ theme }) => theme.title()}
`;
