import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

const data = new fetchData();
const SignUp = ({ history }) => {
  const [values, setValues] = useState({
    id: '',
    pw: '',
    checkPw: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const postSignUp = () => {
    data.signUp(values).then(res => {
      if ((res.message = 'SUCCESS')) {
        alert('가입 축하드립니다.');
        return history.push('/signIn');
      } else if (res.MESSAGE === 'DUPLICATED ADMIN NAME') {
        alert('이미 가입된 아이디 입니다.');
      }
    });
  };

  const resetInfo = () => {
    setValues({ id: '', pw: '', checkPw: '' });
    alert('가입 정보를 다시 확인해 주세요');
  };

  const checkLogin = e => {
    e.preventDefault();
    const str = /[A-Z]/;
    const special = /[~!@#$%^&*()_+|<>?:{}]/;

    const formCheck =
      values.id.length > 7 &&
      values.id.length < 17 &&
      str.test(values.pw) &&
      special.test(values.pw) &&
      values.pw.length >= 8 &&
      values.checkPw === values.pw;

    formCheck ? postSignUp() : resetInfo();
  };

  return (
    <Container>
      <SingUpBox>
        <SingUpTitle>Admin Sign Up</SingUpTitle>
        <SingUpArticle>
          <Form onsubmit="return false;">
            <div>
              <Caution>8자 이상 16글자 미만</Caution>
              <Input
                placeholder="Id"
                onChange={handleChange}
                minLength="8"
                maxLength="16"
                name="id"
                required
              ></Input>
            </div>
            <div>
              <Caution>대문자, 특수문자 모두 포함 8자 이상</Caution>
              <Input
                placeholder="Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                name="pw"
                required
              ></Input>
            </div>
            <div>
              <Input
                placeholder="Check Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                name="checkPw"
                required
              ></Input>
            </div>
            <SignUpBnt onClick={checkLogin}>Sign Up</SignUpBnt>
          </Form>
          <SignUpText>
            Need an account?&nbsp;<Link to="/signIn">Sign In</Link>
          </SignUpText>
        </SingUpArticle>
      </SingUpBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-left: 15%;
`;

const SingUpBox = styled.div`
  width: 50rem;
  margin: 0 auto;
  margin-top: 10rem;
  text-align: center;
  color: white;
  background-color: white;
  overflow: hidden;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const SingUpTitle = styled.div`
  padding-top: 2rem;
  height: 7rem;
  font-size: 3rem;
  color: white;
  background-color: #a37bfd;
  text-align: center;
`;

const SingUpArticle = styled.div`
  padding: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  font-weight: 500;
  color: #707070;

  &:focus {
    outline: none;
  }
`;

const SignUpBnt = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const SignUpText = styled.div`
  color: #707070;
  font-size: 20px;

  a {
    font-size: 20px;
    color: #2d4665;
  }
`;
const Form = styled.form``;

const Caution = styled.div`
  font-size: 10px;
  color: red;
  text-align: left;
`;

export default SignUp;
