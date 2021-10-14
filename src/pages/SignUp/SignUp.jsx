import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUp = ({ history }) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [checkPwValue, setCheckPwValue] = useState('');

  const handleInputId = e => {
    setIdValue(e.target.value);
  };

  const handleInputPw = e => {
    setPwValue(e.target.value);
  };

  const handleInputCheckPw = e => {
    setCheckPwValue(e.target.value);
  };

  const postSignUp = () => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        name: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          alert('가입 축하드립니다.');
          return history.push('/Signin');
        } else if (response.MESSAGE === 'DUPLICATED ADMIN NAME') {
          alert('이미 가입된 아이디 입니다.');
        }
      });
  };

  const resetInfo = () => {
    setIdValue('');
    setPwValue('');
    setCheckPwValue('');
    alert('가입 정보를 다시 확인해 주세요');
  };

  const checkLogin = () => {
    const str = /[A-Z]/;
    const special = /[~!@#$%^&*()_+|<>?:{}]/;

    const formCheck =
      idValue.length > 7 &&
      idValue.length < 17 &&
      str.test(pwValue) &&
      special.test(pwValue) &&
      pwValue.length >= 8 &&
      checkPwValue === pwValue;

    formCheck ? postSignUp() : resetInfo();
  };

  return (
    <div>
      <SingUpBox>
        <SingUpTitle>Admin Sign In</SingUpTitle>
        <SingUpArticle>
          <Form onsubmit="return false;">
            <div>
              <Caution>8자 이상 16글자 미만</Caution>
              <IdInput
                placeholder="Id"
                onChange={handleInputId}
                value={idValue}
                minLength="8"
                maxLength="16"
                required
              ></IdInput>
            </div>
            <div>
              <Caution>영어, 특수문자 모두 포함 8자 이상</Caution>
              <PwInput
                placeholder="Password"
                type="password"
                onChange={handleInputPw}
                value={pwValue}
                minLength="8"
                required
              ></PwInput>
            </div>
            <div>
              <PwInput
                placeholder="Check Password"
                type="password"
                onChange={handleInputCheckPw}
                value={checkPwValue}
                minLength="8"
                required
              ></PwInput>
            </div>
            <SignUpBnt onClick={checkLogin}>Sign In</SignUpBnt>
          </Form>
          <SignUpText>
            Need an account?<Link to="/Signin">Sign Up</Link>
          </SignUpText>
        </SingUpArticle>
      </SingUpBox>
    </div>
  );
};

const SingUpBox = styled.div`
  width: 500px;
  margin: 0 auto;
  color: white;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const Form = styled.form``;

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

const Caution = styled.div`
  font-size: 10px;
  color: red;
  text-align: left;
`;

const SignUpText = styled.div`
  color: #707070;
  font-size: 20px;

  a {
    font-size: 20px;
    color: #2d4665;
  }
`;

export default SignUp;
