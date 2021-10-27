import React from 'react';
import styled from 'styled-components';

const AccountInfo = ({ data }) => {
  const { title, accountNum } = data;
  return (
    <DescWrapper>
      <Title>{title}</Title>
      <Desc>{accountNum}</Desc>
    </DescWrapper>
  );
};

export default AccountInfo;

const DescWrapper = styled.dl`
  margin: 0 3rem;
`;

const Title = styled.dt`
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  color: #adb4c8;
`;

const Desc = styled.dd`
  font-size: 10rem;
  text-align: center;
`;
