import WebFont from 'webfontloader'
import React, { useContext, useEffect } from 'react'
import { CustomTextContext } from '../SearchEngine/SearchEngine'
import * as S from './SingleFont.Styled'

const SingleFont = ({ font }) => {
  const customText = useContext(CustomTextContext)

  const { family, category } = font

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
          <S.DemoTitle style={{ fontFamily: `${family}` }}>
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

      <S.ButtonGroup>
        <button>copy</button>
        <button>add</button>
      </S.ButtonGroup>
    </S.Card>
  )
}

export default SingleFont
