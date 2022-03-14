import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100vw;
  height: 150px;
  background-color: #303846;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;

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