import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../components/Button/Button';
import { 
  WriteArticleContainer, 
  WriteContentSection,
  WriteTitleSection,
  ButtonContainer } from './WriteArticleStyle';

export const WriteArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    writer: "",
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
  console.log(article)
  const clickHandler = () => {
    console.log(article)
    axios.post('http://localhost:4000/article', article)
      .then((data) => {
        console.log(data)
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
      })
    // setErrorMessage('제목을 입력하세요')
  }

  const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

  return (
    <WriteArticleContainer>

      <WriteTitleSection 
        onChange={changeHandler}
        name="title"
      />
      <div>{errorMessage}</div>
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