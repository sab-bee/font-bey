import React from 'react'
import * as S from './Cart.styled'

const Cart = ({ cartFonts }) => {
  return (
    <S.Cart>
      <S.Container>
        <div>
          <S.Title>Font Drop</S.Title>
          {cartFonts.map((font, index) => (
            <Font key={index} font={font}></Font>
          ))}
        </div>
        <S.CopyAllBtn>copy all</S.CopyAllBtn>
      </S.Container>
    </S.Cart>
  )
}

function Font({ font }) {
  return (
    <S.ItemGroup>
      <S.Item>{font.family}</S.Item>
      <S.RemoveBtn>X</S.RemoveBtn>
    </S.ItemGroup>
  )
}

export default Cart
