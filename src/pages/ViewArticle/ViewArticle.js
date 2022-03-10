import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ViewContainer, 
  ViewHeaderContainer, 
  Writer,
  Title,
  ViewCount,
  Date,
  ContentContainer, 
  ButtonContainer } from './ViewArticleStyle';
import { dummyContent } from '../../dummy/dummyContent';
export const ViewArticle = () => {


  const location = useLocation();
  const ArticleDate = location.state.ArticleDate;

  console.log(ArticleDate)
  const reqEdit = () => {
    console.log('수정버튼 클릭')
  }

  const reqDelete = () => {
    console.log('삭제버튼 클릭')
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
        <Button style={{'margin':'10px'}} onClick={reqEdit}>수정</Button>
        <Button style={{'margin':'10px'}} onClick={reqDelete}>삭제</Button>
      </ButtonContainer>
    </ViewContainer>
  )
}