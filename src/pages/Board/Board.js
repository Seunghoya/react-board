import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ArticleList } from '../../components/ArticleList/ArticleList'
import { BoardHead } from '../../components/BoardHead/BoardHead';
import { Button } from '../../components/Button/Button';
import { BoardContainer, ButtonContainer } from './BoardStyle';

export const Board = () => {
  const history = useHistory()
  const [articleList, setArticleList] = useState([])
  const [page, Setpage] = useState(1)

  const writeButtonClick = () => {
    console.log('작성하기 버튼 클릭')
    history.push('/writeArticle');
    
  }
  console.log('렌더링')
  // 서버에서 게시글 리스트 받아오는 함수
  useEffect(() => {
    const getArticleList = async () => {
      await axios.get('http://localhost:4000/article')
        .then((result) => {
          setArticleList(result.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getArticleList()
  }, [])

  return (
    <BoardContainer>
      <h1>게시판</h1>
      <BoardHead/>
      <ArticleList articleList={articleList}/>
      <ButtonContainer>
        <Button onClick={writeButtonClick}>작성</Button>
      </ButtonContainer>
    </BoardContainer>
  )
}