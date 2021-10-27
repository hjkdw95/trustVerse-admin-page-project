import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fetchData from '../../service/data-fetch';
import axios from 'axios';
import OpenContext from '../../context/Open.context';

const data = new fetchData();
const SignIn = ({ history }) => {
  // context API
  const statusValue = useContext(OpenContext);

  const [values, setValues] = useState({
    email: '',
    pw: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetInfo = () => {
    setValues({ email: '', pw: '' });
  };

  const postSignIn = e => {
    e.preventDefault();
    if (values.email.length < 201 && values.pw.length >= 8) {
      data.signIn(values).then(res => {
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          history.push('/');
        } else if (res.MESSAGE === 'INVALID_ADMIN') {
          resetInfo();
          alert('아이디를 다시 확인해주세요');
        } else if (res.MESSAGE === 'INVALID_PASSWORD') {
          resetInfo();
          alert('비밀번호를 다시 확인해주세요');
        } else if (res.MESSAGE === 'INVALID_ADMIN OR PASSWORD') {
          resetInfo();
          alert('아이디와 비밀번호를 다시 확인해주세요');
        }
      });
    } else {
      resetInfo();
      alert('아이디와 비밀번호를 다시 확인해주세요');
    }
  };

  return (
    <Container className={statusValue.isNavOpened ? '' : 'expand'}>
      <SingInBox>
        <SingInTitle>Admin Sign In</SingInTitle>
        <SingInArticle>
          <Form onsubmit="return false;">
            <div>
              <Input
                placeholder="Email"
                onChange={handleChange}
                minLength="1"
                maxLength="200"
                required
                name="email"
                value={values.email}
              />
            </div>
            <Caution>대문자, 특수문자 모두 포함 8자 이상</Caution>
            <div>
              <Input
                placeholder="Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                required
                name="pw"
                value={values.pw}
              ></Input>
            </div>
            <SignInBnt onClick={postSignIn}>Sign In</SignInBnt>
          </Form>
          <SignInText>
            Need an account?&nbsp;<Link to="/signUp">Sign Up</Link>
          </SignInText>
        </SingInArticle>
      </SingInBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-left: 20rem;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  &.expand {
    padding-left: 0;

    @media screen and (max-width: 1024px) {
      padding-left: 20rem;
    }
  }
`;

const SingInBox = styled.div`
  width: 50rem;
  margin: 0 auto;
  margin-top: 10rem;
  text-align: center;
  overflow: hidden;
  color: white;
  background-color: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form``;

const SingInTitle = styled.div`
  height: 7rem;
  padding-top: 2rem;
  background-color: #a37bfd;
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const SingInArticle = styled.div`
  padding: 2rem;
  border: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Input = styled.input`
  height: 5rem;
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  font-weight: 500;
  color: #707070;

  &:focus {
    outline: none;
  }
`;

const SignInBnt = styled.button`
  width: 100%;
  height: 4.5rem;
  margin-bottom: 2rem;
  border-radius: 13rem;
  background-color: #373063;
  color: white;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const SignInText = styled.div`
  color: #707070;
  font-size: 2rem;

  a {
    font-size: 2rem;
    color: #2d4665;
  }
`;

const Caution = styled.div`
  font-size: 1rem;
  color: red;
  text-align: left;
`;

export default SignIn;
