import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StatusBar = props => {
  const history = useHistory();
  const USER_TOKEN = 'token';
  const [token, setToken] = useState();

  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    history.push('/signIn');
  };

  useEffect(() => {
    setToken(sessionStorage.getItem(USER_TOKEN));
  }, []);

  return (
    <BarWrapper>
      {token && (
        <>
          <TitleWrapper>
            안녕하세요, <span>Admin</span>님
          </TitleWrapper>
          <Button type="button" onClick={handleLogOut}>
            Log Out
          </Button>
        </>
      )}
      <TitleWrapper>로그인을 진행해주세요</TitleWrapper>
      <Button type="button" onClick={() => history.push('/signIn')}>
        Log In
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
