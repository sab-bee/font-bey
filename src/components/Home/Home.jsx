
import { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

function Home() {
  const allFonts = useContext(fontsContext)
  return (
    <>
      <SearchEngine allFonts={allFonts}></SearchEngine>
    </>
  )
}

export default Home
