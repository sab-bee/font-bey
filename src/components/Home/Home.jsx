import { useEffect, useState } from 'react'

function Home() {
  const [fonts, setFonts] = useState([])
  const apikey = 'AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'
  const url =
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFonts(data.items))
  }, [])

  function getSerif() {
    const serif = fonts.filter((font) => font.category === 'sans-serif')
    console.log(serif)
  }
  return <div>
    <button onClick={getSerif}>get serif</button>
  </div>
}

export default Home
