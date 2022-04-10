import { createContext, useEffect, useState } from 'react'

export const fontsContext = createContext()

export function UseFonts(props) {
  const [fonts, setFonts] = useState([])

  // const apikey = 'AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'
  // const url =
  //   'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0'

  const url =
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC1NhmA4X2D6fS93J5pMX-wlAiyqfeRMV0&sort=popularity'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFonts(data.items)
      })
  }, [])
  return <fontsContext.Provider value={fonts}>{props.children}</fontsContext.Provider>
}
