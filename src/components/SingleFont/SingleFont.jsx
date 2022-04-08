import React, { useEffect } from 'react'
import {
  ButtonBody,
  CardBody,
  SingleFontContainer,
  TopPart,
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
    <SingleFontContainer>
      <CardBody>
        {/* <h3 style={{fontFamily:`${family}`}}>{family}</h3> */}
        <TopPart>
          <p>{family}</p>
          <p>{category}</p>
        </TopPart>
      </CardBody>
      <ButtonBody>
        <button>copy</button>
        <button>add</button>
      </ButtonBody>
    </SingleFontContainer>
  )
}

export default SingleFont
