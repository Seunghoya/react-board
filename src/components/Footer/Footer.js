import React from 'react';
import { FooterContainer } from './FooterStyle';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

export const Footer = () => {

  return (
    <FooterContainer>
      <div>
        <div>Link</div>
        <a href='https://github.com/Seunghoya' target='_blank' rel='noreferrer'>
          <AiFillGithub /> Github
        </a>
        <a href='mailto:viva.primavera121@gmail.com'>
          <HiOutlineMail /> E-mail
        </a>
      </div>
    </FooterContainer>
  )
}