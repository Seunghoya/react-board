import styled from 'styled-components';

export const BoardHeadContainer = styled.ul`
  margin: 0 10px 0 10px;
  height: 30px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  list-style: none;
  background-color: rgba(0, 0, 155, 0.4);

  
`
export const BoardHeadId = styled.li`
  width: 10%;
  font-weight: 800;
`
export const BoardHeadTitle = styled.li`
  width: 60%;
  font-weight: 800;
`
export const BoardHeadWriter = styled.li`
  width: 20%;
  min-width: 100px;
  font-weight: 800;
`
export const BoardHeadDate = styled.li`
  width: 10%;
  min-width: 100px;
  font-weight: 800;
`
