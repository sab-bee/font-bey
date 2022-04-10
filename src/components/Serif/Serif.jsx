import React, { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const Serif = () => {
  const categories = ['serif']
  const allFonts = useContext(fontsContext)
  const serifFonts = allFonts.filter((font) =>
    categories.includes(font.category)
  )

  return (
    <div>
      <SearchEngine allFonts={serifFonts}></SearchEngine>
    </div>
  )
}

export default Serif
