import React from 'react';
import { dummyArticleList } from '../../dummy/dummyArticleList';
import { ArticleListContainer, Id, Title, Writer, Date } from './ArticleListStyle'

export const ArticleList = () => {

  const getArticleList = () => {
    // 서버에 req 보내서 받아오는 res 참고해서 작성하기.
    
  }
  const ClickHandler = (e) => {
    console.log(e)

    
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