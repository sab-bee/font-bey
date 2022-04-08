import React, { createContext, useState } from 'react'
import Fonts from '../Fonts/Fonts'
import UseFonts from '../hooks/UseFonts'
import Search from '../Search/Search'
import { BtnWraper, Container, MoreBtn, StyledP } from './Syled.SearchEngine'


export const CustomTextContext = createContext(null)
const SearchEngine = ({choosedCategory}) => {
  const allFonts = UseFonts()

  const [searchFonts, setSearchFonts] = useState([])
  const [fontsCount, setfontsCount] = useState(20)
  const [isSearched, setIsSearched] = useState(false)

  const [customText, setCustomText] = useState('A slow brown fox could not jump over the wall')
  
  const searchHandler = (value) => {
    setIsSearched(true)
    const searchTest = value.toLowerCase()
    const textMatch = allFonts.filter((font) =>
      font.family.toLowerCase().includes(searchTest)
    )
    const categoryMatched = textMatch.filter((font) => choosedCategory.includes(font.category))
    // console.log(categoryMatched)
    setSearchFonts(categoryMatched)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  const writeSomethingHandler = (event) => {
    !isSearched || setCustomText(event.target.value)
  }

  return (
    //  prettier-ignore
    <CustomTextContext.Provider value={customText}>
      <Container>
      <Search
        searchHandler={searchHandler}
        submitHandler={submitHandler}
        writeSomethingHandler={writeSomethingHandler}
        isSearched={isSearched}>
      </Search>

      {
        !isSearched || <StyledP><span>{searchFonts.length}</span> results found</StyledP>
      }

      <Fonts 
      searchFonts={searchFonts.slice(0, fontsCount)}></Fonts>
      {searchFonts.length <= 20 || (
        <BtnWraper>
          <MoreBtn onClick={() => setfontsCount(fontsCount + 20)}>
            show more
          </MoreBtn>
        </BtnWraper>
      )}
    </Container>
    </CustomTextContext.Provider>
  )
}

export default SearchEngine
