import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserStatusJoinType = ({ types }) => {
  const SocialData = useDashBoardArr(types, 'social_type', 'type_count');

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0, // y축 스케일에 대한 최소값 설정
            stepSize: 1, // y축 그리드 한 칸당 수치
          },
        },
      ],
    },
    plugins: {
      datalabels: { color: 'black' },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
          padding: 20,
        },
      },
    },
    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
  };
  const data = {
    // 각 막대별 라벨

    labels: SocialData.AllKeyArr,
    datasets: [
      {
        label: 'SocialType',
        borderWidth: 1, // 테두리 두께
        data: SocialData.ArrValues, // 수치
        backgroundColor: ['#7298FF', '#55FFFF', '#2639FF'], // 각 막대 색
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Users Join Type</Title>
      <Bar
        data={data}
        options={options}
        plugins={[ChartDataLabels]}
        height={300}
      />
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
