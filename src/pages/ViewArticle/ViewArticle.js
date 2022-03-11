import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ViewContainer, 
  ViewHeaderContainer, 
  Writer,
  Title,
  ViewCount,
  Date,
  ContentContainer, 
  ButtonContainer } from './ViewArticleStyle';
import axios from 'axios';
import { dummyContent } from '../../dummy/dummyContent';
export const ViewArticle = () => {

  const history = useHistory()
  const location = useLocation();
  const ArticleDate = location.state.ArticleDate;

  console.log(ArticleDate)

  const goback = () => {
    history.push('/')
  }
  const reqEdit = () => {
    console.log('수정버튼 클릭')
  }

  const reqDelete = () => {
    axios.delete(`http://localhost:4000/article/${ArticleDate.id}`)
      .then((data) => {
        console.log(data)
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
      })

    
  }

  return (
    <ViewContainer>
      <ViewHeaderContainer>
        <Writer>{ArticleDate.writer}</Writer>
        <Title>{ArticleDate.title}</Title>
        <ViewCount>조회수</ViewCount>
        <Date>{ArticleDate.createdAt}</Date>
      </ViewHeaderContainer>
      <ContentContainer>
        <div>{ArticleDate.content}</div>
      </ContentContainer>
      <ButtonContainer>
        <Button style={{'margin':'10px'}} onClick={goback}>목록으로</Button>
        <Button style={{'margin':'10px'}} onClick={reqEdit}>수정</Button>
        <Button style={{'margin':'10px'}} onClick={reqDelete}>삭제</Button>
      </ButtonContainer>
    </ViewContainer>
  )
}