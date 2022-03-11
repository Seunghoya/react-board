import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const EditTitleSection = styled.input.attrs({
  placeholder: '제목',
  type: 'text'
})`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 20px;

`

export const EditContentSection = styled.textarea`
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

