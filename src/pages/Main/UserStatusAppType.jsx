import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserStatusAppType = ({ appType }) => {
  const appTypeArr = useDashBoardArr(appType, 'appname', 'user_count');

  console.log(appType);

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
  };
  const data = {
    // 각 막대별 라벨

    labels: appTypeArr.AllKeyArr,
    datasets: [
      {
        label: 'AppName',
        borderWidth: 1, // 테두리 두께
        data: appTypeArr.ArrValues, // 수치
        backgroundColor: ['#7298FF', '#55FFFF', '#2639FF', '#555271'], // 각 막대 색
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Users Per App</Title>
      <Container>
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
      </Container>
    </Wrapper>
  );
};

export default UserStatusAppType;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  height: 100%;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;

const Container = styled.div`
  padding-top: 20px;
`;
