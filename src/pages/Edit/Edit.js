import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { EditContainer, EditTitleSection, EditContentSection, ButtonContainer } from './EditStyle'
import { Button } from '../../components/Button/Button';

export const Edit = () => {


  const history = useHistory()
  const location = useLocation();
  const ArticleDate = location.state.ArticleDate;

  const { title, content, writer } = ArticleDate
  
  const [article, setArticle] = useState({
    title: title,
    content: content,
    writer: writer,
  })

  const [errorMessage, setErrorMessage] = useState('')
  const changeHandler = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    })
  }
  console.log(article)
  const clickHandler = () => {
    console.log(article)
    axios.patch(`http://localhost:4000/article/${ArticleDate.id}`, article)
      .then((data) => {
        console.log(data)
        history.push('/board');
      })
      .catch((err) => {
        console.log(err)
      })
    // setErrorMessage('제목을 입력하세요')
  }
  return (
    <EditContainer>
      <EditTitleSection 
        onChange={changeHandler}
        value={article.title}
        name="title"
      />
      <div>{errorMessage}</div>
      <EditContentSection 
        onChange={changeHandler} 
        value={article.content}
        name="content"
      />
      <ButtonContainer onClick={clickHandler}>
        <Button>작성완료</Button>
      </ButtonContainer>
    </EditContainer>
  )
}