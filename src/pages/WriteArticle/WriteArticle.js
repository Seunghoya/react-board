import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../components/Button/Button';
import { 
  WriteArticleContainer,
  WriterPasswordContainer,
  WriterSection,
  PasswordSection,
  WriteContentSection,
  WriteTitleSection,
  ButtonContainer } from './WriteArticleStyle';
import { Modal } from '../../components/Modal/Modal';

export const WriteArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    writer: "",
    password: ""
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const history = useHistory()

  const changeHandler = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    })
  }
  const clickHandler = () => {
    const { title, content, writer, password } = article

    if (title.length === 0) {
      setIsOpenModal(true)
      setErrorMessage("제목을 입력하세요")
    }
    else if (content.length === 0) {
      setIsOpenModal(true)
      setErrorMessage("내용을 입력하세요")
    }
    else if (writer.length === 0) {
      setIsOpenModal(true)
      setErrorMessage("이름을 입력하세요")
    }
    else if (password.length === 0) {
      setIsOpenModal(true)
      setErrorMessage("비밀번호를 입력하세요")
    }
    else {
      axios.post('http://localhost:4000/article', article)
      .then((data) => {
        console.log(data)
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  const modalOpenHandler = () => {
    setIsOpenModal(!isOpenModal)
  }

  const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

  return (
    <WriteArticleContainer>
      {isOpenModal ? <Modal errorMessage={errorMessage} modalOpenHandler={modalOpenHandler}/> : null}
      <WriterPasswordContainer>
        <WriterSection 
          name="writer" 
          onChange={changeHandler}>
        </WriterSection>
        <PasswordSection 
          name="password" 
          onChange={changeHandler}>
        </PasswordSection>
      </WriterPasswordContainer>

      <WriteTitleSection 
        onChange={changeHandler}
        name="title"
      />

      <WriteContentSection 
        onChange={changeHandler}
        name="content"
        />
      <ButtonContainer onClick={clickHandler}>
        <Button>작성완료</Button>
      </ButtonContainer>
    </WriteArticleContainer>
  )
}