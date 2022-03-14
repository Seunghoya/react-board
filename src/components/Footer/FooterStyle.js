import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #303846;
  position: fixed;
  left: 100;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
    > div {
      margin: 10px;
      color: whitesmoke;
      text-decoration: none;
      font-size: 30px;
    }
    > a {
      margin: 10px;
      color: whitesmoke;
      text-decoration: none;
      font-size: 20px;
    }
  }
`