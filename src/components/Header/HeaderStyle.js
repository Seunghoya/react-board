import styled from "styled-components";
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(55, 120, 222, 0.3);
`

export const HeaderLink = styled(Link)`
  margin: 0 20px 0 20px;
  color: black;
  text-decoration: none;
  font-size: 30px;

  &:hover {
    color: gray;
  }
`

