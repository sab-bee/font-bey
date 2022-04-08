import UseFonts from '../hooks/UseFonts'
import SearchEngine from '../SearchEngine/SearchEngine'

const SansSerif = () => {
  const chooseCategory = ['sans-serif']
  const sansFonts = UseFonts(chooseCategory)


  return <SearchEngine allFonts={sansFonts}></SearchEngine>
}

export default SansSerif
