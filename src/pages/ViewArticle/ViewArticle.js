import React from 'react';
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

  const reqEdit = () => {
    console.log('수정버튼 클릭')
  }

  const reqDelete = () => {
    console.log('삭제버튼 클릭')
  }

  return (
    <ViewContainer>
      <ViewHeaderContainer>
        <Writer>작성자</Writer>
        <Title>제목</Title>
        <ViewCount>조회수</ViewCount>
        <Date>작성일</Date>
      </ViewHeaderContainer>
      <ContentContainer>
        <div>{dummyContent}</div>
      </ContentContainer>
      <ButtonContainer>
        <Button style={{'margin':'10px'}} onClick={reqEdit}>수정</Button>
        <Button style={{'margin':'10px'}} onClick={reqDelete}>삭제</Button>
      </ButtonContainer>
    </ViewContainer>
  )
}