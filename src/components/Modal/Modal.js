import React from 'react';
import { ModalBackground, 
  ModalContainer } from './ModalStyle';
import { Button } from '../Button/Button';

export const Modal = ({ errorMessage, modalOpenHandler }) => {

  return (
    <ModalBackground onClick={modalOpenHandler}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {errorMessage}
        <Button onClick={modalOpenHandler}>닫기</Button>
      </ModalContainer>
    </ModalBackground>
  )
}