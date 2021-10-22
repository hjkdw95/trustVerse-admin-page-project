import React from 'react';
import styled from 'styled-components';
import AccountInfo from './AccountInfo';

const TotalAccount = props => {
  const ACCOUNT_DATA = [
    { title: '총 가입자 수', accountNum: 707 },
    { title: '누적 가입자 수', accountNum: 719 },
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
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: center;
`;
