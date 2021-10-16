import { tokTypes } from 'acorn';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StatusBar = props => {
  const history = useHistory();

  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    history.push('/signIn');
  };

  return (
    <BarWrapper>
      <TitleWrapper>
        안녕하세요, <span>위고두</span>님
      </TitleWrapper>
      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </BarWrapper>
  );
};

export default StatusBar;

const BarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  padding: 2.65rem 3rem;
  text-align: end;
`;

const TitleWrapper = styled.div`
  color: #434750;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;

  span {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  display: inline-block;
  background-color: #373063;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #373063e6;
  }
`;
