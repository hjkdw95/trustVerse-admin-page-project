import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal/Modal';

const Balance = ({ values, data }) => {
  const [isModalOn, setModalOn] = useState(false);
  const [coinData, setCoinData] = useState({
    name: '',
    rowIdx: 0,
  });

  const handleClick = e => {
    const targetCell = e.currentTarget;
    const rowIdx = targetCell.parentNode.parentNode.parentNode.id;

    setCoinData({
      ...coinData,
      name: e.target.innerHTML,
      rowIdx: rowIdx,
    });
    setModalOn(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {values?.map((coin, idx) => {
        return (
          <Tags key={idx} onClick={handleClick}>
            {coin}
          </Tags>
        );
      })}
      {isModalOn && <Modal coinData={coinData} setModalOn={setModalOn} />}
    </div>
  );
};

export default Balance;

const Tags = styled.span`
  background-color: #00d82c;
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  transition: all 150ms ease-in;

  &:hover {
    opacity: 0.7;
  }
`;
