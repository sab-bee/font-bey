import UseFonts from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

function Home() {
  const chooseCategory = [
    'sans-serif',
    'serif',
    'monospace',
    'display',
    'handwriting',
  ]

  const allFonts = UseFonts(chooseCategory)

  return (
    <>
      <SearchEngine allFonts={allFonts}></SearchEngine>
    </>
  )
}

export default Home
