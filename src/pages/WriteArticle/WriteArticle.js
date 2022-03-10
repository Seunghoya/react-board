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

  const titleChangeHandler = (e) => {
    const title = e.target.value
    const { content, writer } = article
    setArticle({
      title: title,
      content: content,
      writer: writer,
    })
  }
  const contentChangeHandler = (e) => {
    const { title, writer } = article
    setArticle({
      title: title,
      content: e.target.value,
      writer: writer,
    })
  }
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
      <div>제목</div>
      <WriteTitleSection onChange={titleChangeHandler}/>
      <div>{errorMessage}</div>
      내용
      <WriteContentSection onChange={contentChangeHandler}/>
      <ButtonContainer onClick={clickHandler}>
        <Button>작성완료</Button>
      </ButtonContainer>
    </WriteArticleContainer>
  )
}