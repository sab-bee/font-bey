import React, { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const Serif = () => {
  const {serif:serifFonts} = useContext(fontsContext)


  return (
    <div>
      <SearchEngine allFonts={serifFonts}></SearchEngine>
    </div>
  )
}

export default Serif
