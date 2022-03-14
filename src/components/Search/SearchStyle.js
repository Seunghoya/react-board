import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 0 20px 20px 0;
  display: flex;
  justify-content: right;
`

export const SearchBox = styled.input.attrs({
  placeholder: " Search",
  type: "text"
})`
  position: relative;
  border-radius: 20px;
  font-size: 15px;
  width: 150px;
  height: 20px;
`

export const ClearBox = styled.span`
  position: relative;
  right: 20px;
  z-index: 101;
  color: #999;
  cursor: pointer;
`