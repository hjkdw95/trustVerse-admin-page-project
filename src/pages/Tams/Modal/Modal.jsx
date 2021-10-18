import React, { useEffect, useState } from 'react';
import fetchData from '../../../service/data-fetch';
import axios from 'axios';
import styled from 'styled-components';

const Modal = ({ coinData, setModalOn }) => {
  const { name, rowIdx } = coinData;
  const data = new fetchData();
  const [info, setInfo] = useState();

  useEffect(() => {
    data.getTamWallet().then(item => setInfo(item[rowIdx].wallet_balance));
  }, []);

  const handleWindow = e => {
    const clicked = e.target.closest('.modal');
    if (clicked === null) {
      setModalOn(prev => !prev);
    }
  };

  const walletName = info?.find(el => el.coin_name === name).password;
  const rawBalance = info?.find(el => el.coin_name === name).num;
  const balance = +rawBalance;

  return (
    <Container onClick={handleWindow}>
      <ModalContainer className="modal">
        <H1>Coin Details</H1>
        <Dl>
          <Dt>Coin Name</Dt>
          <Dd>{name}</Dd>
          <Dt>Wallet Name</Dt>
          <Dd>{walletName}</Dd>
          <Dt>Balance</Dt>
          <Dd>{balance}</Dd>
        </Dl>
      </ModalContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 15%;
  z-index: 100000;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50rem;
  height: 30rem;
  background-color: #fff;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
  box-shadow: 0px 10px 20px rgb(0 0 0 / 30%);
  z-index: 1;
`;

const H1 = styled.div`
  background-color: #a37bfd;
  padding-top: 2.8rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  height: 8rem;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
`;

const Dl = styled.dl`
  padding: 4rem 3rem;
`;

const Dt = styled.dt`
  float: left;
  margin-bottom: 2rem;
  ${({ theme }) => theme.tableFont()};
  font-weight: 700;
`;

const Dd = styled.dd`
  margin-left: 12.5rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.tableFont()};
  text-align: start;
  word-break: break-all;
`;
