import { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const SansSerif = () => {
  const categories = ['sans-serif']
  const allFonts = useContext(fontsContext)
  const sansFonts = allFonts.filter((font) =>
    categories.includes(font.category)
  )

  return <SearchEngine allFonts={sansFonts}></SearchEngine>
}

export default SansSerif
