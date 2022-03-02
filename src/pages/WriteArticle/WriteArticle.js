import React, { useState } from 'react';
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
    pw: "",
    date: ""
  })
  const [errorMessage, setErrorMessage] = useState('')
  const titleChangeHandler = (e) => {
    const title = e.target.value
    const { content, writer, pw } = article
    setArticle({
      title: title,
      content: content,
      writer: writer,
      pw: pw,
      date: nowDate
    })
  }
  const contentChangeHandler = (e) => {
    const { title, writer, pw } = article
    setArticle({
      title: title,
      content: e.target.value,
      writer: writer,
      pw: pw,
      date: nowDate
    })
  }
  const clickHandler = () => {
    console.log(article)
    setErrorMessage('제목을 입력하세요')
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