import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const options = {
  legend: {
    display: false, // label 보이기 여부
  },
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
  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
  maintainAspectRatio: false,
  plugins: {
    datalabels: { color: 'black' },
  },
};
const data = {
  // 각 막대별 라벨

  labels: ['Canvas', 'Jupiter', 'Mars', 'Masterkey'],
  datasets: [
    {
      label: 'AppName',
      borderWidth: 1, // 테두리 두께
      data: [166, 80, 272, 189], // 수치
      backgroundColor: ['#7298FF', '#55FFFF', '#2639FF', '#555271'], // 각 막대 색
    },
  ],
};

const UserStatusAppType = props => {
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

export default UserStatusAppType;

const Div = styled.div`
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};
`;
