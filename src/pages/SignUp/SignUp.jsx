import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUp = props => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleInputId = e => {
    setIdValue(e.target.value);
  };
  const handleInputPw = e => {
    setPwValue(e.target.value);
  };
  return (
    <div>
      <SingUpBox>
        <SingUpTitle>Admin SignUp</SingUpTitle>
        <SingUpArticle>
          <div>
            <IdInput
              placeholder="Name"
              onChange={handleInputId}
              value={idValue}
            ></IdInput>
          </div>
          <div>
            <PwInput
              placeholder="Password"
              type="password"
              onChange={handleInputPw}
              value={pwValue}
            ></PwInput>
          </div>
          <SignUpBnt>SignUp</SignUpBnt>
          <SignUpText>
            Need an account?<Link to="/Signin">Log in</Link>
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

export default SignUp;
