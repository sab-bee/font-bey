import React, { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const MonoSpace = () => {
  const categories = ['monospace']
  const allFonts = useContext(fontsContext)
  const monospaceFonts = allFonts.filter((font) =>
    categories.includes(font.category)
  )
  return (
    <div>
      <SearchEngine allFonts={monospaceFonts}></SearchEngine>
    </div>
  )
}

export default MonoSpace
