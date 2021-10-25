import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserStatusAppType = ({ appType }) => {
  const appTypeArr = useDashBoardArr(appType, 'appname', 'user_count');

  const options = {
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
    labels: appTypeArr.AllKeyArr,
    datasets: [
      {
        label: 'AppName',
        borderWidth: 1,
        data: appTypeArr.ArrValues,
        backgroundColor: [
          '#218C8D',
          '#6CCECB',
          '#F9E559',
          '#EF7125',
          '#8EDC9C',
          '#473D3F',
        ],
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Subscribers Num App</Title>
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
