import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArticleList } from '../../components/ArticleList/ArticleList'
import { BoardHead } from '../../components/BoardHead/BoardHead';
import { Button } from '../../components/Button/Button';
import { BoardContainer, ButtonContainer } from './BoardStyle';

export const Board = () => {
  const history = useHistory()
  const writeButtonClick = () => {
    console.log('작성하기 버튼 클릭')
    history.push('/writeArticle');
    
  }

  return (
    <BoardContainer>
      <h1>게시판</h1>
      <ButtonContainer>
        <Button onClick={writeButtonClick}>작성</Button>
      </ButtonContainer>
      <BoardHead/>
      <ArticleList/>
    </BoardContainer>
  )
}