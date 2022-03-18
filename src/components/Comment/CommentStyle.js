import styled from 'styled-components';

export const CommentContainer = styled.div`
  background-color: #9994;
  margin: 20px 0 20px 0;
`

export const InputCommentInfo = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;

  .namebox {
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  .contentbox {
    display: flex;
    flex-direction: row;
    width: 80%;

    > button {
      margin: 20px 0 20px 0;
    }
  }
`
export const InputName = styled.input.attrs({
  placeholder: '이름'
})`
  margin: 10px;
  font-size: 20px;
  padding: 5px;
`

export const InputPassword = styled.input.attrs({
  placeholder: '비밀번호'
})`
  margin: 10px;
  font-size: 20px;
  padding: 5px;
`

export const InputContent = styled.textarea.attrs({
  placeholder: '내용'
})`
  margin: 10px;
  width: 90%;
  font-size: 20px;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
  border-radius: 2px;

`