import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { EditContainer, EditTitleSection, EditContentSection, ButtonContainer } from './EditStyle'
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';

export const Edit = () => {
  const history = useHistory()
  const location = useLocation();
  const ArticleDate = location.state.ArticleDate;

  const { title, content, writer } = ArticleDate
  const [isOpenModal, setIsOpenModal] = useState(false)
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

  const goback = () => {
    history.goBack()
  }
  const clickHandler = () => {
    const { title, content } = article

    if (title.length === 0 || content.length === 0){
      setErrorMessage("입력하신 내용을 확인해주세요")
      modalOpenHandler()
    }
    else {
      axios.put(`http://localhost:4000/article/${ArticleDate.id}`, article)
      .then((data) => {
        // console.log(data)
        history.push('/board');
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
  const modalOpenHandler = () => {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <EditContainer>
      {isOpenModal ? <Modal errorMessage={errorMessage} modalOpenHandler={modalOpenHandler}/> : null}
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
      <ButtonContainer >
        <Button style={{'margin':'10px'}} onClick={goback}>돌아가기</Button>
        <Button style={{'margin':'10px'}} onClick={clickHandler}>수정하기</Button>
      </ButtonContainer>
    </EditContainer>
  )
}