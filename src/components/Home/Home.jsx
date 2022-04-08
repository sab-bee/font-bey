
import UseFonts from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'


function Home() {
  const choosedCategory = ['sans-serif','serif','monospace','display','handwriting']

  const allFonts = UseFonts()

  return (
    <>
      <SearchEngine choosedCategory={choosedCategory} allFonts={allFonts}></SearchEngine>
    </>
  )
}

export default Home
