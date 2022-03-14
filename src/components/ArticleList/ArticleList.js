import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { dummyArticleList } from '../../dummy/dummyArticleList';
import { useHistory } from 'react-router-dom';
import { ArticleListContainer, Id, Title, Writer, Date } from './ArticleListStyle'

export const ArticleList = ({ articleList}) => {
  const history = useHistory()
  
  console.log(articleList)
  // 게시글 클릭했을 때 게시글 뷰 페이지로 이동하는 함수
  const ClickHandler = (e) => {
    console.log(e)
    history.push({
      pathname: `/viewArticle/${e.id}`,
      state: {
        ArticleDate: {
          id: e.id,
          title: e.title,
          writer: e.writer,
          content: e.content,
          createdAt: e.createdAt
        }
      }
    })
  }
  
  const sortList = articleList.sort((a, b) => b.id - a.id)
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
          {data.createdAt}
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