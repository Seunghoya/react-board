import React, { useState } from 'react';
import axios from 'axios';
import { SearchContainer, SearchBox, ClearBox } from './SearchStyle';


export const Search = ({ articleList, setArticleList }) => {
  const [inputValue, setInputValue] = useState('')

  const clearInputContent = () => {
    setInputValue('')
  }

  const changeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const filterArticleList = async () => {
    await axios.get(`http://localhost:4000/article?filter=${inputValue}`)
      .then((data) => {
        setArticleList(data.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // 필터 함수 추가
      filterArticleList()
      console.log(inputValue, '엔터키 입력')
    }
  };

  return (
    <SearchContainer>
      <div>
        <SearchBox 
          name="search"
          value={inputValue}
          onChange={changeHandler}
          onKeyPress={handleKeyPress}/>
        <ClearBox onClick={clearInputContent}>X</ClearBox>
      </div>
    </SearchContainer>
  )
}