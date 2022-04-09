import React from 'react'
import * as S from './Cart.styled'

const Cart = ({ cartFonts }) => {
  return (
    <S.Cart>
      <div>
        <S.Title>Font Drop</S.Title>
        {cartFonts.map((font, index) => (
          <Font key={index} font={font}></Font>
        ))}
        <S.CopyAllBtn>copy all</S.CopyAllBtn>
      </div>
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
