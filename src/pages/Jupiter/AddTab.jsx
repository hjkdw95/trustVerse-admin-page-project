import React from 'react';
import styled from 'styled-components';

const AddTab = ({ setTabIndex }) => {
  return (
    <div>
      <AddTabBox>
        <AddTabBoxTitle>Upload Report</AddTabBoxTitle>
        <AddTabBoxArticle>
          <div>
            <InputTitle for="title">Title</InputTitle>
            <IdInput
              id="title"
              name="title"
              placeholder="eg. VOL_KR-20-004-JUPITER"
              required
            />
          </div>
          <div>
            <InputTitle for="description">Description</InputTitle>
            <PwInput
              id="description"
              name="description"
              placeholder="eg. It now appears that traders are targeting a movement up towards $8,100"
              required
            ></PwInput>
          </div>
          <div>
            <InputTitle for="cover">Cover*</InputTitle>
            <FileInput type="file" id="cover" name="cover" required></FileInput>
            <Caution>*please upload a .png file of the report covers</Caution>
          </div>
          <div>
            <InputTitle for="content">Content*</InputTitle>
            <FileInput
              type="file"
              id="content"
              name="content"
              required
            ></FileInput>
            <Caution>*please upload a .pdf file of the report content</Caution>
          </div>
          <UpLoadBnt>UpLoad</UpLoadBnt>
        </AddTabBoxArticle>
        <BackBnt
          onClick={() => {
            setTabIndex(1);
          }}
        >
          &lt;&#00;-&#08; Back to main
        </BackBnt>
      </AddTabBox>
    </div>
  );
};
const AddTabBox = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const AddTabBoxTitle = styled.div`
  background-color: #a37bfd;
  height: 70px;
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const AddTabBoxArticle = styled.div`
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
  margin-bottom: 20px;
`;

const PwInput = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
`;

const FileInput = styled.input`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px gray solid;
  border-radius: 2px;
  padding-top: 12px;
`;

const Caution = styled.div`
  font-size: 15px;
  color: red;
  text-align: left;
  margin-bottom: 10px;
`;

const UpLoadBnt = styled.button`
  height: 45px;
  border-radius: 130px;
  background-color: #373063;
  color: white;
  width: 200px;
  font-size: 16px;
  margin-bottom: 20px;

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
export default AddTab;
