import React from 'react'
import SingleFont from '../SingleFont/SingleFont'
import { FontsContainer } from './Fonts.Styled'

const Fonts = ({ searchFonts }) => {
  
  return (
    <FontsContainer>
      {searchFonts.map((font) => (
        <SingleFont
          key={Math.floor(Math.random() * Math.pow(10, 15))}
          font={font}
        ></SingleFont>
      ))}
    </FontsContainer>
  )
}

export default Fonts
