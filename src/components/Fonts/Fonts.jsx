import SingleFont from '../SingleFont/SingleFont'
import * as S from './Fonts.Styled'
import Slider from '../Slider/Slider'
import { useState } from 'react'
import Cart from '../Cart/Cart'

const Fonts = ({ searchFonts }) => {
  const [fontSize, setFontSize] = useState(32)
  const [cartFonts, setCartFonts] = useState([])
  const handleFontSize = (size) => {
    setFontSize(size)
    console.log(fontSize)
  }

  const handleCart = (font) => {
    const newCart = [...cartFonts, font]
    setCartFonts(newCart)
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
            handleCart={handleCart}
          ></SingleFont>
        ))}
      </S.FontsContainer>
      <Cart cartFonts = {cartFonts}></Cart>
    </>
  )
}

export default Fonts
