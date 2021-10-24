import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

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

  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
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
        label: '가입 회원',
        data: cumulativeSubscriptionData[0]?.CumulativeRegister.map(qwe => {
          return qwe.count1;
        }),

        backgroundColor: '#2639FF',
      },
      {
        stack: 'Stack 0',
        label: '탈퇴 회원',
        data: cumulativeSubscriptionData[0]?.CumulativeRegister.map(qwe => {
          return qwe.count2;
        }),
        backgroundColor: '#7298FF',
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Regist Status</Title>
      <Bar data={data} options={options} />
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
