import styled from 'styled-components';

export const WriteArticleContainer = styled.div`
  width: 70%;
  max-width: 1300px;
  border: 1px solid black;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const WriterPasswordContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const WriterSection = styled.input.attrs({
  placeholder: '이름',
  type: 'text'
})`
  font-size: 20px;
  padding: 3px;
  margin-right: 20px;
`
export const PasswordSection = styled.input.attrs({
  placeholder: '비밀번호',
  type: 'password'
})`
  font-size: 20px;
  padding: 3px;
  margin-left: 20px;
`
export const WriteTitleSection = styled.input.attrs({
  placeholder: '제목',
  type: 'text'
})`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 20px;
`

export const WriteContentSection = styled.textarea.attrs({
  placeholder: '내용'
})`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 2px;
  font-size: 20px;
  resize: none;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: end;
`

