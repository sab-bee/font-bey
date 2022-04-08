import { useState } from 'react'
import Fonts from '../Fonts/Fonts'
import UseFonts from '../hooks/UseFonts'
import Search from '../Search/Search'
import { Container } from './Styled.Home'

function Home() {
  const allFonts = UseFonts()
  const [searchFonts, setSearchFonts] = useState([])

  const searchHandler = (event) => {
    const searchTest = event.target.value.toLowerCase()
    const match = allFonts.filter((font) =>
      font.family.toLowerCase().includes(searchTest)
    )
    setSearchFonts(match)
  }

  return (
    <Container>
      <Search searchHandler={searchHandler}></Search>
      <Fonts searchFonts={searchFonts}></Fonts>
    </Container>
  )
}

export default Home
