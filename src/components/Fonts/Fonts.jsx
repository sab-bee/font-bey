import SingleFont from '../SingleFont/SingleFont'
import * as S from './Fonts.Styled'
import Slider from '../Slider/Slider'
import { useState } from 'react'

const Fonts = ({ searchFonts }) => {
  const [fontSize, setFontSize] = useState(32)

  const handleFontSize = (size) => {
    setFontSize(size)
    console.log(fontSize)
  }
  return (
    <>
      <Slider handleFontSize={handleFontSize} fontSize={fontSize}></Slider>
      <S.FontsContainer>
        {searchFonts.map((font) => (
          <SingleFont
            key={Math.floor(Math.random() * Math.pow(10, 15))}
            font={font}
            fontSize={fontSize}
          ></SingleFont>
        ))}
      </S.FontsContainer>
    </>
  )
}

export default Fonts
