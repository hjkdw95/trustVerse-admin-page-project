import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';

const Modal = ({ coinData, setModalOn, data }) => {
  const { name, rowIdx } = coinData;
  const [info, setInfo] = useState();

  //context API
  const navStatus = useContext(OpenContext);

  const TITLE = 'Coin Details';

  useEffect(() => {
    setInfo(data[rowIdx].wallet_balance);
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
    <Container
      onClick={handleWindow}
      className={navStatus.isNavOpened ? '' : 'expand'}
    >
      <ModalContainer className="modal">
        <H1>{TITLE}</H1>
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
  margin-left: 20rem;
  z-index: 100000;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }

  &.expand {
    margin-left: 0;

    @media screen and (max-width: 1024px) {
      margin-left: 20rem;
    }
  }
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
