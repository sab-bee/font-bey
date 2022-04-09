import WebFont from 'webfontloader'
import React, { useContext, useEffect, useState } from 'react'
import { CustomTextContext } from '../SearchEngine/SearchEngine'
import * as S from './SingleFont.Styled'
import Slider from '../Slider/Slider'

const SingleFont = ({ font }) => {
  const customText = useContext(CustomTextContext)
  const { family, category } = font

  const [fontSize, setFontSize] = useState(32)

  const handleFontSize = (size) => {
    setFontSize(size)
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: [family],
      },
    })
  }, [family])

  return (
    <S.Card>
      <S.CardBody>
        <S.TopPart>
          <S.FamilyTitle>{family}</S.FamilyTitle>
          <S.CategoryTitle>{category}</S.CategoryTitle>
        </S.TopPart>

        <S.MiddleGroup>
          <S.DemoTitle style={{ fontFamily: `${family}`,fontSize: `${fontSize}px`}}>
            {customText}
          </S.DemoTitle>
        </S.MiddleGroup>

        {/* prettier-ignore */}
        <S.BottomGroup>
          <S.FontWeightButton fw='600'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton fw='500'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton fw='400'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton fw='300'><p>Aa</p></S.FontWeightButton>
        </S.BottomGroup>
      </S.CardBody>

      <Slider handleFontSize={handleFontSize} fontSize={fontSize}></Slider>

      <S.ButtonGroup>
        <button>copy</button>
        <button>add</button>
      </S.ButtonGroup>
    </S.Card>
  )
}

export default SingleFont
