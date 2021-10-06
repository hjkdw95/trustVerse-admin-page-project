import React from 'react';
import styled from 'styled-components';

const DeleteTab = ({ setTabIndex }) => {
  return (
    <div>
      <DeleteTabBox>
        <DeleteTabBoxTitle>Delete Report</DeleteTabBoxTitle>
        <DeleteTabBoxArticle>
          <div>
            <InputTitle for="report_id">Report ID</InputTitle>
            <IdInput
              placeholder="Enter the report id to delete"
              required
              type="text"
              name="report_id"
              id="report_id"
            />
          </div>
          <DeleteBnt>Delete</DeleteBnt>
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
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const DeleteTabBoxTitle = styled.div`
  background-color: #a37bfd;
  height: 70px;
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 70px;
`;

const DeleteTabBoxArticle = styled.div`
  padding: 0 100px;
  border: #f0f3f5;
`;

const InputTitle = styled.label`
  font-size: 15px;
  text-align: left;
  margin-bottom: 10px;
  display: block;
`;

const IdInput = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 40px;
`;

const DeleteBnt = styled.button`
  height: 45px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  width: 200px;
  font-size: 16px;
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const BackBnt = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
export default DeleteTab;
