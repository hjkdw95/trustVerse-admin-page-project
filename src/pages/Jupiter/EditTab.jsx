import React from 'react';
import styled from 'styled-components';

const EditTab = ({ setTabIndex }) => {
  return (
    <div>
      <EditTabBox>
        <EditTabBoxTitle>Edit Report</EditTabBoxTitle>
        <EditTabBoxArticle>
          <div>
            <InputTitle for="report_id">Report ID</InputTitle>
            <Input
              placeholder="Enter the report id to edit"
              required
              type="text"
              name="report_id"
              id="report_id"
            />
          </div>
          <div>
            <InputTitle for="title">Title</InputTitle>
            <Input
              placeholder="eg. VOL_KR-20-004-JUPITER"
              required
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div>
            <InputTitle for="description">Description</InputTitle>
            <Input
              placeholder="eg. It now appears that traders are targeting a movement up towards $8,100"
              required
              type="text"
              name="description"
              id="description"
            />
          </div>
          <UpdateBnt>Update</UpdateBnt>
        </EditTabBoxArticle>
        <Caution>
          *If you wish to change the uploaded file, please delete the related
          file and then upload again.
        </Caution>
        <BackBnt
          onClick={() => {
            setTabIndex(1);
          }}
        >
          &lt;&#00;-&#08; Back to main
        </BackBnt>
      </EditTabBox>
    </div>
  );
};
const EditTabBox = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const EditTabBoxTitle = styled.div`
  background-color: #a37bfd;
  height: 70px;
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 70px;
`;

const EditTabBoxArticle = styled.div`
  padding: 0 100px;
  border: #f0f3f5;
`;

const InputTitle = styled.label`
  font-size: 15px;
  text-align: left;
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 40px;
`;

const UpdateBnt = styled.button`
  height: 45px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  width: 200px;
  font-size: 16px;
  margin-bottom: 30px;

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

const Caution = styled.div`
  font-size: 15px;
  color: red;
  margin-bottom: 10px;
`;

export default EditTab;
