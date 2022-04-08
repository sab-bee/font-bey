import { createContext, useState } from 'react'
import Fonts from '../Fonts/Fonts'
import UseFonts from '../hooks/UseFonts'
import Search from '../Search/Search'
import { Container,MoreBtn,BtnWraper } from './Styled.Home'

export const ButtonContext = createContext(null)

function Home() {
  const allFonts = UseFonts()

  const [searchFonts, setSearchFonts] = useState([])
  const [fontsCount, setfontsCount] = useState(20)

  const searchHandler = (value) => {
    const searchTest = value.toLowerCase()
    const match = allFonts.filter((font) =>
      font.family.toLowerCase().includes(searchTest)
    )
    setSearchFonts(match)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    
      <Container>
        <Search
          searchHandler={searchHandler}
          submitHandler={submitHandler}
        ></Search>
        <Fonts searchFonts={searchFonts.slice(0, fontsCount)}></Fonts>
        {searchFonts.length === 0 || (
        <BtnWraper>
          <MoreBtn onClick={() => setfontsCount(fontsCount + 20)}>
            show more
          </MoreBtn>
        </BtnWraper>
      )}
      </Container>
  )
}

export default Home
