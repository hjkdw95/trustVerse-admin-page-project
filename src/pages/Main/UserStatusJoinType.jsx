import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    title: {
      display: true,
      text: '앱별 유저현황',
      fontSize: 20,
    },
  },

  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
  maintainAspectRatio: false,
};
const data = {
  // 각 막대별 라벨

  labels: ['Email', 'Apple', 'Kakao'],
  datasets: [
    {
      label: 'SocialType',
      borderWidth: 1, // 테두리 두께
      data: [485, 20, 202], // 수치
      backgroundColor: ['#7298FF', '#55FFFF', '#2639FF'], // 각 막대 색
    },
  ],
};

const UserStatusJoinType = props => {
  return (
    <Div>
      <Bar
        data={data}
        options={options}
        height={300}
        plugins={[ChartDataLabels]}
      />
    </Div>
  );
};

export default UserStatusJoinType;

const Div = styled.div`
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};
`;
