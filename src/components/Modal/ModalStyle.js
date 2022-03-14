import styled from 'styled-components';


export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 100;
`

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 300px;
  background-color: snow;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  z-index: 101;
`