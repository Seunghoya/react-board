import React from 'react';
import { 
  BoardHeadContainer, 
  BoardHeadId, 
  BoardHeadTitle,
  BoardHeadWriter, 
  BoardHeadDate,
  BoardViewCnt } from './BoardHeadStyle'

export const BoardHead = () => {

  return (
    <BoardHeadContainer>
      <BoardHeadId>번호</BoardHeadId>
      <BoardHeadTitle>제목</BoardHeadTitle>
      <BoardHeadWriter>글쓴이</BoardHeadWriter>
      <BoardHeadDate>등록일</BoardHeadDate>
      <BoardViewCnt>조회수</BoardViewCnt>
    </BoardHeadContainer>
  )
}