import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AddTab = ({ setTabIndex }) => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    cover: null,
    comment: null,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileOnChange = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      localStorage.setItem('recent-image', reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log(values.cover);
  }, [values]);

  const postReport = () => {
    fetch('', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        cover: values.cover,
        comment: values.comment,
      }),
    });
  };

  return (
    <div>
      <AddTabBox>
        <AddTabBoxTitle>Upload Report</AddTabBoxTitle>
        <AddTabBoxArticle>
          <Form onSubmit={postReport}>
            <div>
              <InputTitle for="title">Title</InputTitle>
              <IdInput
                placeholder="eg. VOL_KR-20-004-JUPITER"
                id="title"
                name="title"
                minLength="10"
                onChange={handleChange}
                type="text"
                required
              />
            </div>
            <div>
              <InputTitle for="description">Description</InputTitle>
              <PwInput
                placeholder="eg. It now appears that traders are targeting a movement up towards $8,100"
                id="description"
                name="description"
                minLength="10"
                onChange={handleChange}
                type="text"
                required
              ></PwInput>
            </div>
            <div>
              <InputTitle for="cover">Cover*</InputTitle>
              <FileInput
                type="file"
                id="cover"
                name="cover"
                onChange={handleFileOnChange}
                required
              ></FileInput>
              <Caution>*please upload a .png file of the report covers</Caution>
            </div>
            <div>
              <InputTitle for="content">Content*</InputTitle>
              <FileInput
                type="file"
                id="content"
                name="content"
                onChange={handleFileOnChange}
                required
              ></FileInput>
              <Caution>
                *please upload a .pdf file of the report content
              </Caution>
            </div>
            <UpLoadBnt type="submit" onClick={postReport} value="UpLoad" />
          </Form>
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
  margin-top: 100px;
  text-align: center;
  border: 1px gray solid;
  background-color: white;
`;

const Form = styled.form``;

const AddTabBoxTitle = styled.div`
  height: 70px;
  padding-top: 20px;
  margin-bottom: 20px;
  color: white;
  background-color: #a37bfd;
  font-size: 30px;
  text-align: center;
`;

const AddTabBoxArticle = styled.div`
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
  width: 100%;
  margin-bottom: 20px;
  padding: 13px 20px;
  height: 50px;
  border: 1px gray solid;
  border-radius: 2px;
`;

const Caution = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  color: red;
  text-align: left;
`;

const UpLoadBnt = styled.input`
  width: 200px;
  height: 45px;
  margin-bottom: 20px;
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

export default AddTab;
