import SearchEngine from '../SearchEngine/SearchEngine'
function Home() {
  const choosedCategory = [
    'sans-serif',
    'serif',
    'monospace',
    'display',
    'handwriting',
  ]
  return (
    <>
      <SearchEngine choosedCategory={choosedCategory}></SearchEngine>
    </>
  )
}

export default Home
