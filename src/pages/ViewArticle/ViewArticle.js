import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ViewContainer, 
  ViewHeaderContainer, 
  Writer,
  Title,
  ViewCount,
  Date,
  ContentContainer, 
  ButtonContainer } from './ViewArticleStyle';
import axios from 'axios';
import { dummyContent } from '../../dummy/dummyContent';
export const ViewArticle = () => {

  const history = useHistory()
  const location = useLocation();
  const ArticleDate = location.state.ArticleDate;

  // console.log(ArticleDate)
  useEffect(() => {
    axios.patch(`http://localhost:4000/article/${ArticleDate.id}`)
      .then((data) => {
        // console.log('조회수 증가')
      })
      .catch((err) =>[
        console.log(err)
      ])

    return () => {
    }
  }, [ArticleDate])

  // console.log(ArticleDate)
  const goback = () => {
    history.push('/board')
  }
  const reqEdit = () => {
    history.push({
      pathname: `/edit/${ArticleDate.id}`,
      state: {
        ArticleDate: ArticleDate
      }
    });
  }

  const reqDelete = () => {
    axios.delete(`http://localhost:4000/article/${ArticleDate.id}`)
      .then((data) => {
        history.push('/board');
      })
      .catch((err) => {
        console.log(err)
      })
    
  }

  return (
    <ViewContainer>
      <ViewHeaderContainer>
        <Writer>{ArticleDate.writer}</Writer>
        <Title>{ArticleDate.title}</Title>
        <ViewCount>조회수: {ArticleDate.viewCnt + 1}</ViewCount>
        <Date>{ArticleDate.createdAt}</Date>
      </ViewHeaderContainer>
      <ContentContainer>
        <div>{ArticleDate.content}</div>
      </ContentContainer>
      <div>
        <input placeholder='이름'></input>
        <input placeholder='비밀번호'></input>
      </div>
      <div>
        <textarea placeholder='내용'></textarea>
      </div>
      <div>
        <div>
          <div>아이디</div>
          <div>내용</div>
        </div>
      </div>
      <ButtonContainer>
        <Button style={{'margin':'10px'}} onClick={goback}>목록으로</Button>
        <Button style={{'margin':'10px'}} onClick={reqEdit}>수정</Button>
        <Button style={{'margin':'10px'}} onClick={reqDelete}>삭제</Button>
      </ButtonContainer>
    </ViewContainer>
  )
}