import React from 'react';
import { Pie } from 'react-chartjs-2';
import { APP_DATA_OPTIONS } from '../../utils/chartConfig';
import styled from 'styled-components';

const UserPerApp = props => {
  const APP_DATA = {
    labels: ['Mars', 'Jupiter', 'Masterkey', 'canvas'],
    datasets: [
      {
        // data 바꿔줘야함
        data: [300, 200, 100, 50],
        borderwidth: 1,
        backgroundColor: ['#47dfd4', '#66d9d0', '#97e3de', '#b6e5e2'],
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Users per App</Title>
      <Pie data={APP_DATA} options={APP_DATA_OPTIONS} />
    </Wrapper>
  );
};
export default UserPerApp;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;
