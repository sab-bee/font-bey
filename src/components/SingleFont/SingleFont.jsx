import React, { useContext, useEffect, useState } from 'react'
import {
  ButtonBody,
  CardBody,
  MiddlePart,
  Container,
  TopPart,
  BottomPart,
  Demo,
  Family,
  Category,
  RegularBtn,
  LightBtn,
  SemiBoldBtn,
  MediumBtn,
} from './SingleFont.Styled'
import WebFont from 'webfontloader'
import { CustomTextContext } from '../SearchEngine/SearchEngine'

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
    <Container>
      <CardBody>
        <TopPart>
          <Family>{family}</Family>
          <Category>{category}</Category>
        </TopPart>

        <MiddlePart>
          <Demo style={{ fontFamily: `${family}` }}>{customText}</Demo>
        </MiddlePart>

        {/* prettier-ignore */}
        <BottomPart>
          <SemiBoldBtn><p>Aa</p></SemiBoldBtn>
          <MediumBtn><p>Aa</p></MediumBtn>
          <RegularBtn><p>Aa</p></RegularBtn>
          <LightBtn><p>Aa</p></LightBtn>
        </BottomPart>
      </CardBody>

      <ButtonBody>
        <button>copy</button>
        <button>add</button>
      </ButtonBody>
    </Container>
  )
}

export default SingleFont
