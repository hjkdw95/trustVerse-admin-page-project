import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

const data = new fetchData();
const SignIn = ({ history }) => {
  const [values, setValues] = useState({
    id: '',
    pw: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const postSignIn = e => {
    e.preventDefault();
    if (
      values.id.length > 7 &&
      values.id.length < 17 &&
      values.pw.length >= 8
    ) {
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

  const resetInfo = () => {
    setValues({ id: '', pw: '' });
  };

  return (
    <div>
      <SingInBox>
        <SingInTitle>Admin Sign In</SingInTitle>
        <SingInArticle>
          <Form onsubmit="return false;">
            <div>
              <Caution>8자 이상 16글자 미만</Caution>
              <IdInput
                placeholder="Id"
                onChange={handleChange}
                minLength="8"
                maxLength="16"
                required
                name="id"
              ></IdInput>
            </div>
            <Caution>대문자, 특수문자 모두 포함 8자 이상</Caution>
            <div>
              <PwInput
                placeholder="Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                required
                name="pw"
              ></PwInput>
            </div>
            <SignInBnt onClick={postSignIn}>Sign In</SignInBnt>
          </Form>
          <SignInText>
            Need an account?&nbsp;<Link to="/signUp">Sign Up</Link>
          </SignInText>
        </SingInArticle>
      </SingInBox>
    </div>
  );
};

const SingInBox = styled.div`
  width: 500px;
  margin-left: 550px;
  color: white;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const Form = styled.form``;

const SingInTitle = styled.div`
  background-color: #a37bfd;
  height: 70px;
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 20px;
`;

const SingInArticle = styled.div`
  padding: 20px;
  border: #f0f3f5;
`;

const IdInput = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
`;

const PwInput = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
`;

const SignInBnt = styled.button`
  height: 45px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const SignInText = styled.div`
  color: #707070;
  font-size: 20px;

  a {
    font-size: 20px;
    color: #2d4665;
  }
`;

const Caution = styled.div`
  font-size: 10px;
  color: red;
  text-align: left;
`;
export default SignIn;
