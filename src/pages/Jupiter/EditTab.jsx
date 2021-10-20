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

const Section = styled.div``;

const EditTabBox = styled.div`
  width: 80rem;
  margin: 0 auto;
  margin-top: 5rem;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form``;

const EditTabBoxTitle = styled.div`
  height: 7rem;
  padding-top: 2rem;
  margin-bottom: 7rem;
  background-color: #a37bfd;
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const EditTabBoxArticle = styled.div`
  padding: 0 10rem;
`;

const InputTitle = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  height: 5rem;
  margin-bottom: 4rem;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  font-weight: 500;
  color: #707070;

  &:focus {
    outline: none;
  }
`;

const UpdateBnt = styled.button`
  width: 20rem;
  height: 4.5rem;
  margin-bottom: 3rem;
  background-color: #373063;
  color: white;
  font-size: 1.6rem;
  border-radius: 13rem;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Caution = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: red;
`;

export default EditTab;
