import { useEffect, useState } from 'react'

function UseFonts(category) {
  const [fonts, setFonts] = useState([])

  // const apikey = 'AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'
  const url =
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFonts(data.items)
      })
  }, [])

  const customCactegory = fonts.filter((font) => font.category === category)
  if (customCactegory.length !== 0) {
    return customCactegory
  }
  return fonts
}

export default UseFonts
