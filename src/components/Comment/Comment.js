import React, { useState } from 'react';
import axios from 'axios';
import { CommentContainer,
  InputCommentInfo,
  InputName,
  InputPassword,
  InputContent,
  ViewContainer,
  ViewName,
  ViewContent } from './CommentStyle';
import { Button } from '../Button/Button';

export const Comment = ({ ArticleDate }) => {
  const [comment, setComment] = useState({
    name: '',
    password: '',
    content: '',
  })
  
  const changeHandler = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }
  const clickHandler = () => {
    axios.post(`http://localhost:4000/comment?id=${ArticleDate.id}`, comment)
      .then((data) => {
        document.location.reload()
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <CommentContainer>
      <InputCommentInfo>
        <div className='namebox'>
          <InputName
            onChange={changeHandler}
            name="name"/>
          <InputPassword
            onChange={changeHandler}
            name="password"/>
        </div>
        <div className='contentbox'>
          <InputContent  
            onChange={changeHandler}
            name="content"/>
          <Button onClick={clickHandler}>등록</Button>
        </div>
      </InputCommentInfo>
    </CommentContainer>
  )
}