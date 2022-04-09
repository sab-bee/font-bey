import React, { createContext, useState } from 'react'
import Fonts from '../Fonts/Fonts'
import Search from '../Search/Search'

import * as S from './SearchEngine.Styled'

export const CustomTextContext = createContext(null)
const SearchEngine = ({ allFonts }) => {
  // console.log(allFonts)
  const [searchFonts, setSearchFonts] = useState([])
  const [fontsCount, setfontsCount] = useState(20)
  const [isSearched, setIsSearched] = useState(false)

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
    setSearchFonts(textMatch)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  const writeSomethingHandler = (event) => {
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
        <S.ButtonGroup>
          <S.ViewButton onClick={() => setfontsCount(fontsCount + 20)}>
            view more
          </S.ViewButton>
        </S.ButtonGroup>
      )
    }
  }

  return (
    //  prettier-ignore
    <CustomTextContext.Provider value={customText}>
      <S.Container>
        <Search
          searchHandler={searchHandler}
          submitHandler={submitHandler}
          writeSomethingHandler={writeSomethingHandler}
          totalFontFound = {isSearched? searchFonts.length : allFonts.length}
          // isSearched={isSearched} use it if u dont want to type cutom para before search
          >
        </Search>

        {/* {
          <S.Result><span>{isSearched ? searchFonts.length : allFonts.length}</span> results found</S.Result>
        } */}

        <Fonts 
          searchFonts={searchFonts.length === 0 ? allFonts.slice(0, fontsCount) : searchFonts.slice(0, fontsCount)}>
        </Fonts>

        {fontLoader()}
        
      </S.Container>
    </CustomTextContext.Provider>
  )
}

export default SearchEngine
