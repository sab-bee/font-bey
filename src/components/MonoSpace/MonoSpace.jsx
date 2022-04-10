import React, { useContext } from 'react'
import { fontsContext } from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const MonoSpace = () => {
  const { monospace: monospaceFonts } = useContext(fontsContext)
  console.log(monospaceFonts)
  return (
    <div>
      <SearchEngine allFonts={monospaceFonts}></SearchEngine>
    </div>
  )
}

export default MonoSpace
