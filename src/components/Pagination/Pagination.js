import React from 'react';
import { PaginationContainer,
  PageUl,
  PageLi,
  PageSpan } from './PaginationStyle';

export const Pagination = ({ totalArticles, articlesPerPage, Setpage }) => {
  const pageNum = []

  for (let i = 0; i < Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNum.push(i)
  }

  console.log(pageNum)
  const pageNumber = pageNum.map((page) => {
    return (
      <PageLi key={page}  onClick={() => Setpage(page)}>
        <PageSpan>
          {page + 1}
        </PageSpan>
      </PageLi>
    )

  })
  return (
    <PaginationContainer>
      <PageUl>
        {pageNumber}
      </PageUl>
    </PaginationContainer>
  )
}

