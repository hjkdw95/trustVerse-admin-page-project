import React from 'react';
import { Pie } from 'react-chartjs-2';
import { APP_DATA_OPTIONS } from '../../utils/chartConfig';
import styled from 'styled-components';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserPerApp = ({ ratio }) => {
  const AppDataArr = useDashBoardArr(ratio, 'appname', 'user_ratio');

  const APP_DATA = {
    labels: AppDataArr.AllKeyArr,
    datasets: [
      {
        data: AppDataArr.ArrValues,
        borderwidth: 1,
        backgroundColor: ['#47dfd4', '#66d9d0', '#97e3de', '#b6e5e2'],
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Subscribers per App</Title>
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
