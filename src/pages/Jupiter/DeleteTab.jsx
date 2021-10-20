import React, { useState } from 'react';
import styled from 'styled-components';

const DeleteTab = () => {
  const [IdValue, setIdValue] = useState({
    id: '',
  });

  const handleChange = e => {
    setIdValue(e.target.value);
  };

  const deleteReport = () => {
    fetch('http://192.168.1.244:8000/admin/delete', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        id: IdValue,
      }),
    });
  };

  return (
    <Section>
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
      </DeleteTabBox>
    </Section>
  );
};

const Section = styled.div``;

const DeleteTabBox = styled.div`
  width: 80rem;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form``;

const DeleteTabBoxTitle = styled.div`
  height: 7rem;
  padding-top: 2rem;
  margin-bottom: 7rem;
  background-color: #a37bfd;
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const DeleteTabBoxArticle = styled.div`
  padding: 0 10rem;
`;

const InputTitle = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
`;

const IdInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  font-weight: 500;
  color: #707070;

  &:focus {
    outline: none;
  }
`;

const DeleteBnt = styled.input`
  width: 20rem;
  height: 4.5rem;
  margin-bottom: 4rem;
  background-color: #373063;
  color: white;
  font-size: 1.6rem;
  border: none;
  border-radius: 13rem;

  &:hover {
    cursor: pointer;
  }
`;

export default DeleteTab;
