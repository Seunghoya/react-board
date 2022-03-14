import styled from 'styled-components';

export const ViewContainer = styled.div`
  width: 70%;
  max-width: 1300px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const ViewHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 255, 0.3);
  font-size: 15px;
  height: 30px;
`

export const Writer = styled.div`
  width: 10%;
`

export const Title = styled.div`
  width: 60%;
  font-weight: 600;
`

export const ViewCount = styled.div`
  width: 10%;
`

export const Date = styled.div`
  width: 10%;
`
export const ContentContainer = styled.div`
  display: flex;
  min-height: 500px;
  height: auto;
  padding: 20px;
  text-align: start;

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`