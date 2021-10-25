import React, { useState } from 'react';
import styled from 'styled-components';

const EditTab = ({ showModal, closeModal, reportId }) => {
  const [values, setValues] = useState({
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
        id: reportId,
        title: values.title,
        description: values.description,
      }),
    });
    closeModal();
  };
  return (
    <>
      {showModal[1] ? (
        <Background onClick={closeModal}>
          <Section onClick={e => e.stopPropagation()}>
            <EditTabBox>
              <EditTabBoxTitle>Edit Report</EditTabBoxTitle>
              <EditTabBoxArticle>
                <Form onSubmit={EditReport}>
                  <div>
                    <InputTitle>Report ID : {reportId}</InputTitle>
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
                *If you wish to change the uploaded file, please delete the
                related file and then upload again.
              </Caution>
            </EditTabBox>
          </Section>
        </Background>
      ) : null}
    </>
  );
};

const Section = styled.div``;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const EditTabBox = styled.div`
  position: fixed;
  left: 57%;
  top: 50%;
  width: 80rem;
  transform: translate(-50%, -50%);

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
