import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import OpenContext from '../../context/Open.context';

const AddTab = ({ showModal, closeModal, getData }) => {
  //context API
  const navStatus = useContext(OpenContext);

  const [values, setValues] = useState({
    title: '',
    description: '',
    cover: null,
    content: null,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileOnChange = async event => {
    event.preventDefault();
    const { name, files } = event.target;
    setValues({ ...values, [name]: files[0] });
  };

  const postReport = event => {
    event.preventDefault();
    if (
      values.title.length > 9 &&
      values.description.length > 9 &&
      values.cover &&
      values.content
    ) {
      let formData = new FormData();
      formData.append('cover', values.cover, values.cover.name);
      formData.append('type', values.cover.type);
      formData.append('content', values.content, values.content.name);
      formData.append('type', values.content.type);

      console.log(values.cover, values.content);

      let requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      };

      // fetch(
      //   `https://cors-anywhere.herokuapp.com/https://jupiterapiserver-dev.azurewebsites.net/main/reports?title=${values.title}&description=${values.description}`,
      //   requestOptions
      // );

      setTimeout(() => {
        getData();
      }, 1500);

      closeModal();
    } else {
      alert('Title, Description 10글자 이상 입력해주세요.');
    }
  };

  return (
    <>
      {showModal[0] ? (
        <Background onClick={closeModal}>
          <Section onClick={e => e.stopPropagation()}>
            <AddTabBox className={navStatus.isNavOpened ? '' : 'expand'}>
              <AddTabBoxTitle>Upload Report</AddTabBoxTitle>
              <AddTabBoxArticle>
                <Form onSubmit={postReport}>
                  <div>
                    <InputTitle for="title">Title</InputTitle>
                    <Input
                      placeholder="eg. VOL_KR-20-004-JUPITER"
                      id="title"
                      name="title"
                      onChange={handleChange}
                      type="text"
                      minLength="10"
                      required
                    />
                  </div>
                  <div>
                    <InputTitle for="description">Description</InputTitle>
                    <Input
                      placeholder="eg. It now appears that traders are targeting a movement up towards $8,100"
                      id="description"
                      name="description"
                      minLength="10"
                      onChange={handleChange}
                      type="text"
                    ></Input>
                  </div>
                  <div>
                    <InputTitle for="cover">Cover*</InputTitle>
                    <FileInput
                      type="file"
                      id="cover"
                      name="cover"
                      onChange={handleFileOnChange}
                    ></FileInput>
                    <Caution>
                      *please upload a .png file of the report covers
                    </Caution>
                  </div>
                  <div>
                    <InputTitle for="content">Content*</InputTitle>
                    <FileInput
                      type="file"
                      id="content"
                      name="content"
                      onChange={handleFileOnChange}
                    ></FileInput>
                    <Caution>
                      *please upload a .pdf file of the report content
                    </Caution>
                  </div>
                  <UpLoadBnt disabled type="submit" onClick={postReport}>
                    UpLoad
                  </UpLoadBnt>
                </Form>
              </AddTabBoxArticle>
            </AddTabBox>
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

const AddTabBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80rem;
  text-align: center;
  background-color: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 1024px) {
    width: 70%;

    &.expand {
      width: 60%;
      margin-left: 100px;
    }
  }
`;

const Form = styled.form``;

const AddTabBoxTitle = styled.div`
  height: 7rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  color: white;
  background-color: #a37bfd;
  text-align: center;
`;

const AddTabBoxArticle = styled.div`
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
  margin-bottom: 2rem;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  font-weight: 500;
  color: #707070;

  &:focus {
    outline: none;
  }
`;

const FileInput = styled.input`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.3rem 2rem;
  height: 5rem;
  border: 1px solid #f1f3f5;
  border-radius: 2px;
`;

const Caution = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: red;
  text-align: left;
`;

const UpLoadBnt = styled.button`
  width: 20rem;
  height: 4.5rem;
  margin-bottom: 2rem;
  border-radius: 13rem;
  background-color: #373063;
  color: white;
  font-size: 1.6rem;
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 32rem;
  }
`;

export default AddTab;
