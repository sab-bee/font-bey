import { useState } from 'react'
import * as S from './Cart.styled'

const Cart = ({ cartFonts, handleRemoveThis }) => {
  const [isCopied, setIsCopied] = useState(false)

  const getLink = () => {
    if (cartFonts.length < 1) return
    const families = cartFonts.map((font) => {
      const family = font.family
      const arr = family.split(' ')
      const str = arr.join('+')
      return str
    })

    let prefix = `@import url('https://fonts.googleapis.com/css2?`
    let postfix = `display=swap');`
    const famsWithWt = families.map(
      (fam) => `family=${fam}:wght@300;400;500;600&`
    )
    const combined = famsWithWt.join('')
    navigator.clipboard.writeText(prefix + combined + postfix)

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <S.Cart>
      <S.Container>
        <div>
          <S.Title>Font Drop</S.Title>
          {cartFonts.length === 0 ? (
            <S.Empty>empty</S.Empty>
          ) : (
            cartFonts.map((font, index) => (
              <Font
                key={index}
                font={font}
                handleRemoveThis={handleRemoveThis}
              ></Font>
            ))
          )}
        </div>
        <S.CopyAllBtn onClick={getLink}>
          {isCopied ? 'copied' : 'copy all'}
        </S.CopyAllBtn>
      </S.Container>
    </S.Cart>
  )
}
function Font({ font, handleRemoveThis }) {
  return (
    <S.ItemGroup>
      <S.Item>{font.family}</S.Item>
      <S.RemoveBtn onClick={() => handleRemoveThis(font)}>X</S.RemoveBtn>
    </S.ItemGroup>
  )
}

export default Cart
