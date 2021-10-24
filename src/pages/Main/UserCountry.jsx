import React from 'react';
import { Pie } from 'react-chartjs-2';
import { COUNTRY_DATA_OPTIONS } from '../../utils/chartConfig';
import styled from 'styled-components';
import useDashBoardArr from '../../utils/useDashBoardArr';

const UserCountry = ({ countries }) => {
  const countryArr = useDashBoardArr(countries, 'country', 'country_count');

  const COUNTRY_DATA = {
    labels: countryArr.AllKeyArr,
    datasets: [
      {
        data: countryArr.ArrValues,
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

  return (
    <Wrapper>
      <Title>Nationality</Title>
      <Pie data={COUNTRY_DATA} options={COUNTRY_DATA_OPTIONS} />
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
