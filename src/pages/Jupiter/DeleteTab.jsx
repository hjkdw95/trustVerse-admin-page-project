import React, { useState } from 'react';
import styled from 'styled-components';

const DeleteTab = ({ setTabIndex }) => {
  const [IdValue, setIdValue] = useState({
    id: '',
  });

  const handleChange = e => {
    setIdValue(e.target.value);
  };

  const deleteReport = () => {
    fetch('', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        id: IdValue,
      }),
    });
  };

  return (
    <div>
      <DeleteTabBox>
        <DeleteTabBoxTitle>Delete Report</DeleteTabBoxTitle>
        <DeleteTabBoxArticle>
          <Form onSubmit={deleteReport}>
            <div>
              <InputTitle for="report_id">Report ID</InputTitle>
              <IdInput
                placeholder="Enter the report id to delete"
                type="text"
                name="report_id"
                id="report_id"
                onChange={handleChange}
                required
              />
            </div>
            <DeleteBnt type="submit" onClick={deleteReport} value="Delete" />
          </Form>
        </DeleteTabBoxArticle>
        <BackBnt
          onClick={() => {
            setTabIndex(1);
          }}
        >
          &lt;&#00;-&#08; Back to main
        </BackBnt>
      </DeleteTabBox>
    </div>
  );
};

const DeleteTabBox = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  border: 1px gray solid;
  background-color: white;
`;

const Form = styled.form``;

const DeleteTabBoxTitle = styled.div`
  height: 70px;
  padding-top: 20px;
  margin-bottom: 70px;
  background-color: #a37bfd;
  font-size: 30px;
  color: white;
  text-align: center;
`;

const DeleteTabBoxArticle = styled.div`
  padding: 0 100px;
  border: #f0f3f5;
`;

const InputTitle = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: left;
`;

const IdInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  margin-bottom: 40px;
`;

const DeleteBnt = styled.input`
  width: 200px;
  height: 45px;
  margin-bottom: 40px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  font-size: 16px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const BackBnt = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 20px;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`;

export default DeleteTab;