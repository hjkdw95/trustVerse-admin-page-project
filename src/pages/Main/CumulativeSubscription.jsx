import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

const options = {
  legend: {
    display: false, // label 보이기 여부
  },

  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
  maintainAspectRatio: false,
};

const CumulativeSubscription = props => {
  const [cumulativeSubscriptionData, setCumulativeSubscription] = useState([]);
  const data2 = new fetchData();

  useEffect(() => {
    data2
      .cumulativeSubscription()
      .then(item => setCumulativeSubscription(item.result));
  }, []);

  const data = {
    labels: cumulativeSubscriptionData[0]?.CumulativeRegister.map(qwe => {
      return qwe.month;
    }),

    datasets: [
      {
        stack: 'Stack 0',
        indexAxis: 'y',
        label: '가입 회원',
        data: cumulativeSubscriptionData[0]?.CumulativeRegister.map(qwe => {
          return qwe.count1;
        }),

        backgroundColor: '#2639FF',
      },
      {
        stack: 'Stack 0',
        indexAxis: 'y',
        label: '탈퇴 회원',
        data: cumulativeSubscriptionData[0]?.CumulativeRegister.map(qwe => {
          return qwe.count2;
        }),
        backgroundColor: '#7298FF',
      },
    ],
  };

  return (
    <Div>
      <Bar data={data} options={options} height={300} />
    </Div>
  );
};

export default CumulativeSubscription;

const Div = styled.div`
  ${({ theme }) => theme.flexMixin()};
  ${({ theme }) => theme.title()};
`;
