import UseFonts from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const SansSerif = () => {
  const choosedCategory = ['sans-serif']
  const allFonts = UseFonts()
  console.log(allFonts)

  return <SearchEngine choosedCategory={choosedCategory} allFonts={allFonts}></SearchEngine>
}

export default SansSerif
