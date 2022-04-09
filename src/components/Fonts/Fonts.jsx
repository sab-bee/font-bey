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
  }

  const handleAddToCart = (font) => {
    const exist = cartFonts.find((ft) => font.family === ft.family)
    if (!exist) {
      const newCart = [...cartFonts, font]
      setCartFonts(newCart)
    }
  }

  const handleRemoveThis = (font) => {
    const rest = cartFonts.filter((ft) => font.family !== ft.family)
    setCartFonts(rest)
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
            handleAddToCart={handleAddToCart}
         
          ></SingleFont>
        ))}
      </S.FontsContainer>
      <Cart cartFonts={cartFonts} handleRemoveThis={handleRemoveThis}></Cart>
  
    </>
  )
}

export default Fonts
