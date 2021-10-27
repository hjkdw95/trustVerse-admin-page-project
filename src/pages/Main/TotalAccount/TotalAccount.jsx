import React from 'react';
import AccountInfo from './AccountInfo';
import styled from 'styled-components';

const TotalAccount = ({ accounts }) => {
  const ACCOUNT_DATA = [
    { title: '총 가입자 수', accountNum: accounts[0].total_register_num },
    { title: '누적 가입자 수', accountNum: accounts[0].cumulative_num },
  ];

  return (
    <Wrapper>
      <Title>Current Members</Title>
      <DescContainer>
        {ACCOUNT_DATA.map(item => (
          <AccountInfo data={item} />
        ))}
      </DescContainer>
    </Wrapper>
  );
};

export default TotalAccount;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  height: 100%;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;
