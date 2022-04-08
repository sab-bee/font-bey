import React, { useEffect } from 'react'
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

const SingleFont = ({ font }) => {
  const { family, category } = font
  console.log(font)

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
          <Demo style={{ fontFamily: `${family}` }}>
            A slow brown fox could not jump over the wall
          </Demo>
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
