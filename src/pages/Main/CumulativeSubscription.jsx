import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import useDashBoardArr from '../../utils/useDashBoardArr';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

const CumulativeSubscription = ({ subscriptions }) => {
  const subscriptionArr = useDashBoardArr(
    subscriptions,
    'id',
    'year_month',
    'monthly_num',
    'monthly_num2'
  );

  const data = {
    labels: subscriptionArr.ArrValues?.map(qwe => {
      return qwe[0] + '년' + qwe[1] + '월';
    }),

    datasets: [
      {
        stack: 'Stack 0',
        label: 'Member',
        data: subscriptions?.map(qwe => {
          return qwe.monthly_num;
        }),
        backgroundColor: '#D6832A',
      },
      {
        stack: 'Stack 0',
        label: 'Withdrawal Member',
        data: subscriptions?.map(qwe => {
          return qwe.monthly_num2;
        }),
        backgroundColor: '#F3B45B',
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Subscribers Status</Title>
      <Bar data={data} options={options} plugins={[ChartDataLabels]} />
    </Wrapper>
  );
};

export default CumulativeSubscription;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  height: 100%;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;
