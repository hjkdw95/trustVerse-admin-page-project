import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserStatusJoinType = ({ types }) => {
  const SocialData = useDashBoardArr(types, 'social_type', 'social_type_num');

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
          padding: 20,
        },
      },
    },
  };
  const data = {
    labels: SocialData.AllKeyArr,
    datasets: [
      {
        label: 'SocialType',
        borderWidth: 1,
        data: SocialData.ArrValues,
        backgroundColor: ['#8F00FF', '#DB98FF', '#EDBBDE'],
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Subscribe Social Type</Title>
      <Bar data={data} options={options} height={300} />
    </Wrapper>
  );
};

export default UserStatusJoinType;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 30px;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;
