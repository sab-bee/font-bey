import React from 'react'
import UseFonts from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const Serif = () => {
  const chooseCategory = ['serif']
  const serifFonts = UseFonts(chooseCategory)

  return (
    <div>
      <SearchEngine allFonts={serifFonts}></SearchEngine>
    </div>
  )
}

export default Serif
