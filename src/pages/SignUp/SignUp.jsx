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
    <div>
      <SingUpBox>
        <SingUpTitle>Admin Sign Up</SingUpTitle>
        <SingUpArticle>
          <Form onsubmit="return false;">
            <div>
              <Caution>8자 이상 16글자 미만</Caution>
              <IdInput
                placeholder="Id"
                onChange={handleChange}
                minLength="8"
                maxLength="16"
                name="id"
                required
              ></IdInput>
            </div>
            <div>
              <Caution>대문자, 특수문자 모두 포함 8자 이상</Caution>
              <PwInput
                placeholder="Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                name="pw"
                required
              ></PwInput>
            </div>
            <div>
              <PwInput
                placeholder="Check Password"
                type="password"
                onChange={handleChange}
                minLength="8"
                name="checkPw"
                required
              ></PwInput>
            </div>
            <SignUpBnt onClick={checkLogin}>Sign Up</SignUpBnt>
          </Form>
          <SignUpText>
            Need an account?&nbsp;<Link to="/signIn">Sign In</Link>
          </SignUpText>
        </SingUpArticle>
      </SingUpBox>
    </div>
  );
};

const SingUpBox = styled.div`
  width: 500px;
  margin-left: 550px;
  color: white;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const SingUpTitle = styled.div`
  background-color: #a37bfd;
  height: 70px;
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 20px;
`;

const SingUpArticle = styled.div`
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

const SignUpBnt = styled.button`
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
