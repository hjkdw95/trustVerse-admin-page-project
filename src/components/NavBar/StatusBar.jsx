import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { BsList } from 'react-icons/bs';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';
import Buttons from '../Buttons';

const StatusBar = () => {
  // history
  const history = useHistory();
  const location = useLocation();

  // context api
  const { controlNav } = useContext(OpenContext);
  const value = useContext(OpenContext);

  const USER_TOKEN = 'token';
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(USER_TOKEN)) {
      setLogin(true);
    }
  }, [location.pathname]);

  const handleLogOut = () => {
    sessionStorage.removeItem(USER_TOKEN);
    alert('로그아웃되었습니다.');
    setLogin(false);
    history.push('/signin');
  };

  return (
    <BarWrapper className={value.isNavOpened ? '' : 'expand'}>
      <IconWrapper onClick={controlNav}>
        <BsList />
      </IconWrapper>
      {isLogin ? (
        <StatusWrapper>
          <TitleWrapper>Good Day</TitleWrapper>
          <Buttons title="Log Out" clickEvent={handleLogOut} />
        </StatusWrapper>
      ) : (
        <StatusWrapper>
          <TitleWrapper>로그인을 진행해주세요</TitleWrapper>
          <Buttons title="Log In" clickEvent={() => history.push('/signIn')} />
        </StatusWrapper>
      )}
    </BarWrapper>
  );
};

export default StatusBar;

const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20rem;
  background-color: #fff;
  padding: 2.65rem 3rem;
  transition: all 300ms ease-in-out;

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

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  color: #434750;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  color: #434750;
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
