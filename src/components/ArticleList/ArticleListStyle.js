import styled from 'styled-components';

export const ArticleListContainer = styled.ul`
  margin: 0 10px 0 10px;
  height: 30px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  list-style: none;

  :hover {
    background-color: rgba(0, 0, 255, 0.2);
    cursor: pointer;
  }
  
`

export const Id = styled.li`
  width: 10%;
`
export const Title = styled.li`
  width: 60%;
  font-weight: 800;

`
export const Writer = styled.li`
  width: 20%;
  min-width: 100px;
`
export const Date = styled.li`
  width: 10%;
  min-width: 100px;
`