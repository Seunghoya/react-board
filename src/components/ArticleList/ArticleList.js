import React, { useState } from 'react';
import axios from 'axios';
import { dummyArticleList } from '../../dummy/dummyArticleList';
import { useHistory } from 'react-router-dom';
import { ArticleListContainer, Id, Title, Writer, Date } from './ArticleListStyle'

export const ArticleList = () => {
  const history = useHistory()
  
  const [articleList, setArticleList] = useState('')

  // 서버에서 게시글 리스트 받아오는 함수
  const getArticleList = () => {
    axios.get('http://localhost:4000/')
      .then((data) => {
        console.log(data)
        setArticleList(data)
      })
      .catch((err) => {
        console.log(err)
      })
    
  }
  // 게시글 클릭했을 때 게시글 뷰 페이지로 이동하는 함수
  const ClickHandler = (e) => {
    console.log(e)
    history.push('/viewArticle')
    
  }
  
  const sortList = dummyArticleList.sort((a, b) => b.id - a.id)
  const list = sortList.map((data) => {
    
    return (
      <ArticleListContainer key={data.id} onClick={() => ClickHandler(data)}>
        <Id>
          {data.id}
        </Id>
        <Title>
          {data.title}
        </Title>
        <Writer>
          {data.writer}
        </Writer>
        <Date>
          {data.date}
        </Date>
      </ArticleListContainer>
    )
  })

  return (
    <div>
      {list}
    </div>
  )
}