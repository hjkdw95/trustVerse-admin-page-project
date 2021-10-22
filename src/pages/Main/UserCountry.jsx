import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const UserCountry = props => {
  const COUNTRY_DATA = {
    labels: ['Korea', 'Japan', 'China', 'Singapore', 'Others'],
    datasets: [
      {
        data: [300, 200, 100, 50, 20],
        borderwidth: 1,
        backgroundColor: [
          '#f75927',
          '#fd6a3c',
          '#f88a6a',
          '#fbac96',
          '#ededed',
        ],
      },
    ],
  };

  const CHART_OPTIONS = {
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

  return (
    <Wrapper>
      <Title>User Nationality</Title>
      <Pie data={COUNTRY_DATA} options={CHART_OPTIONS} />
    </Wrapper>
  );
};

export default UserCountry;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const Title = styled.h3`
  padding-bottom: 2.2rem;
  ${({ theme }) => theme.smallTitle('#302D43')};
`;
