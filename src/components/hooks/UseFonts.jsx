import { createContext, useEffect, useState } from 'react'

export const fontsContext = createContext()

export function UseFonts(props) {
  const [fonts, setFonts] = useState([])

  const url =
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0&sort=popularity'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFonts(data.items)
      })
  }, [])

  const sans = getFontOnlyFor(fonts, 'sans-serif')
  const serif = getFontOnlyFor(fonts, 'serif')
  const monospace = getFontOnlyFor(fonts, 'monospace')

  return (
    <fontsContext.Provider value={{fonts, sans, serif, monospace}}>
      {props.children}
    </fontsContext.Provider>
  )
}

function getFontOnlyFor(fonts, category) {
  return fonts.filter((font) => font.category === category)
}
