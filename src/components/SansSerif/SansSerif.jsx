import { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const SansSerif = () => {
  const {sans:sansFonts} = useContext(fontsContext)
  
  return <SearchEngine allFonts={sansFonts}></SearchEngine>
}

export default SansSerif
