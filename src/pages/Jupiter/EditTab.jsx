import React, { useState } from 'react';
import styled from 'styled-components';

const EditTab = () => {
  const [values, setValues] = useState({
    id: '',
    title: '',
    description: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const EditReport = () => {
    fetch('http://192.168.1.244:8000/admin/edit', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        id: values.id,
        title: values.title,
        description: values.description,
      }),
    });
  };
  return (
    <Section>
      <EditTabBox>
        <EditTabBoxTitle>Edit Report</EditTabBoxTitle>
        <EditTabBoxArticle>
          <Form onSubmit={EditReport}>
            <div>
              <InputTitle for="report_id">Report ID</InputTitle>
              <Input
                placeholder="Enter the report id to edit"
                type="text"
                name="report_id"
                id="report_id"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <InputTitle for="title">Title</InputTitle>
              <Input
                placeholder="eg. VOL_KR-20-004-JUPITER"
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                minLength="10"
                required
              />
            </div>
            <div>
              <InputTitle for="description">Description</InputTitle>
              <Input
                placeholder="eg. It now appears that traders are targeting a movement up towards $8,100"
                type="text"
                name="description"
                id="description"
                onChange={handleChange}
                minLength="10"
                required
              />
            </div>
            <UpdateBnt type="submit" onClick={EditReport}>
              Update
            </UpdateBnt>
          </Form>
        </EditTabBoxArticle>
        <Caution>
          *If you wish to change the uploaded file, please delete the related
          file and then upload again.
        </Caution>
      </EditTabBox>
    </Section>
  );
};

const Section = styled.div`
  position: relative;
  padding-left: 15%;
`;

const EditTabBox = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px gray solid;
  margin-top: 100px;
  background-color: white;
`;

const Form = styled.form``;

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
  width: 200px;
  height: 45px;
  margin-bottom: 30px;
  background-color: #373063;
  color: white;
  font-size: 16px;
  border-radius: 130px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Caution = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  color: red;
`;

export default EditTab;
