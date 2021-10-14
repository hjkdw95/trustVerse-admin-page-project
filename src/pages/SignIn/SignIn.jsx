import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignIn = ({ history }) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleInputId = e => {
    setIdValue(e.target.value);
  };

  const handleInputPw = e => {
    setPwValue(e.target.value);
  };

  const postSignIn = () => {
    if (idValue > 7 && idValue < 17 && pwValue.length >= 8) {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          name: idValue,
          password: pwValue,
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            history.push('/');
          } else if (response.MESSAGE === 'INVALID_USER') {
            resetInfo();
          }
        });
    } else {
      resetInfo();
    }
  };

  const resetInfo = () => {
    alert('아이디와 비밀번호를 다시 확인해주세요');
    setIdValue('');
    setPwValue('');
  };

  return (
    <div>
      <SingUpBox>
        <SingUpTitle>Admin Sign In</SingUpTitle>
        <SingUpArticle>
          <Form onsubmit="return false;">
            <div>
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
              <PwInput
                placeholder="Password"
                type="password"
                onChange={handleInputPw}
                value={pwValue}
                minLength="8"
                required
              ></PwInput>
            </div>
            <SignUpBnt onClick={postSignIn}>Sign In</SignUpBnt>
          </Form>
          <SignUpText>
            Need an account?<Link to="/SignUp">Sign Up</Link>
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

const SignUpText = styled.div`
  color: #707070;
  font-size: 20px;

  a {
    font-size: 20px;
    color: #2d4665;
  }
`;

export default SignIn;
