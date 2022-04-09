import React, { createContext, useState } from 'react'
import Fonts from '../Fonts/Fonts'
import Search from '../Search/Search'
import { BtnWraper, Container, MoreBtn, StyledP } from './Syled.SearchEngine'

export const CustomTextContext = createContext(null)
const SearchEngine = ({ allFonts }) => {
  // console.log(allFonts)
  const [searchFonts, setSearchFonts] = useState([])
  const [fontsCount, setfontsCount] = useState(20)
  const [isSearched, setIsSearched] = useState(false)
  console.log(fontsCount)

  const [customText, setCustomText] = useState(
    'A slow brown fox could not jump over the wall'
  )

  const searchHandler = (value) => {
    setIsSearched(true)
    setfontsCount(20)
    const searchTest = value.toLowerCase()
    const textMatch = allFonts.filter((font) =>
      font.family.toLowerCase().includes(searchTest)
    )
    // const categoryMatched = textMatch.filter((font) => choosedCategory.includes(font.category))

    setSearchFonts(textMatch)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  const writeSomethingHandler = (event) => {
    // !isSearched || setCustomText(event.target.value)
    setCustomText(event.target.value)
  }

  const fontLoader = () => {
    let fonts = []
    if (isSearched) {
      fonts = [...searchFonts]
    } else {
      fonts = [...allFonts]
    }

    if (fonts.length <= 20) {
      return undefined
    } else {
      return (
        <BtnWraper>
          <MoreBtn onClick={() => setfontsCount(fontsCount + 20)}>
            show more
          </MoreBtn>
        </BtnWraper>
      )
    }
  }

  return (
    //  prettier-ignore
    <CustomTextContext.Provider value={customText}>
      <Container>
        <Search
          searchHandler={searchHandler}
          submitHandler={submitHandler}
          writeSomethingHandler={writeSomethingHandler}
          // isSearched={isSearched} use it if u dont want to type cutom para before search
          >
        </Search>

        {
          <StyledP><span>{isSearched ? searchFonts.length : allFonts.length}</span> results found</StyledP>
        }

        <Fonts 
          searchFonts={searchFonts.length === 0 ? allFonts.slice(0, fontsCount) : searchFonts.slice(0, fontsCount)}>
        </Fonts>

        {fontLoader()}
        
      </Container>
    </CustomTextContext.Provider>
  )
}

export default SearchEngine
