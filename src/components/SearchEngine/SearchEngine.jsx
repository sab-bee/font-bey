import React, { useState } from 'react'
import Fonts from '../Fonts/Fonts'
import UseFonts from '../hooks/UseFonts'
import Search from '../Search/Search'
import { BtnWraper, Container, MoreBtn, StyledP } from './Syled.SearchEngine'

const SearchEngine = ({choosedCategory}) => {
  const allFonts = UseFonts()

  const [searchFonts, setSearchFonts] = useState([])
  const [fontsCount, setfontsCount] = useState(20)
  const [isSearched, setIsSearched] = useState(false)

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

  return (
    //  prettier-ignore
    <Container>
      <Search
        searchHandler={searchHandler}
        submitHandler={submitHandler}>
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
  )
}

export default SearchEngine
