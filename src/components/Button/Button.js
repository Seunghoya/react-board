import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  appearance: button;
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 10px 21px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :active {
    background-color: #006AE8;
  }

  :hover {
    background-color: #1C84FF;
  }
`