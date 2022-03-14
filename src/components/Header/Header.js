import React from 'react';
import { HeaderContainer, HeaderLink } from './HeaderStyle';

export const Header = () => {

  return (
    <HeaderContainer>
      <HeaderLink to="/board">게시판</HeaderLink>
      <HeaderLink to="/writeArticle">작성하기</HeaderLink>
    </HeaderContainer>
  )
}