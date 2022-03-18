import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ArticleList } from '../../components/ArticleList/ArticleList'
import { BoardHead } from '../../components/BoardHead/BoardHead';
import { Button } from '../../components/Button/Button';
import { BoardContainer, ButtonContainer } from './BoardStyle';
import { Search } from '../../components/Search/Search';
import { Pagination } from '../../components/Pagination/Pagination';
export const Board = () => {
  const history = useHistory()
  const [articleList, setArticleList] = useState([])
  const [page, Setpage] = useState(0)
  const [articlesPerPage, setArticlesPerPage] = useState(20)

  const writeButtonClick = () => {
    // console.log('작성하기 버튼 클릭')
    history.push('/writeArticle');
    
  }
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

  const articlesLen = articleList.length
  const lastIndex = articlesLen - (page * articlesPerPage)
  let firstIndex = lastIndex - articlesPerPage

  const currentArticle = (i) => {
    let currentArticle = 0
    console.log(firstIndex)
    if (firstIndex < 0 ) firstIndex = 0

    currentArticle = i.slice(firstIndex, lastIndex)

    return currentArticle
  }

  const clickHandler = (page) => {
    console.log('클릭 이벤트')
    Setpage(page)
  }
  return (
    <BoardContainer>
      <Search 
        articleList={articleList}
        setArticleList={setArticleList}
      />
      <BoardHead/>
      <ArticleList articleList={currentArticle(articleList)}/>
      <div>
        <Pagination articlesPerPage={articlesPerPage} totalArticles={articleList.length} Setpage={clickHandler}/>
        <ButtonContainer>
          <Button onClick={writeButtonClick}>작성</Button>
        </ButtonContainer>
      </div>
    </BoardContainer>
  )
}