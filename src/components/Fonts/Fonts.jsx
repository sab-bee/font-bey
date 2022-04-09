import SingleFont from '../SingleFont/SingleFont'
import * as S from './Fonts.Styled'

const Fonts = ({ searchFonts }) => {
  return (
    <S.FontsContainer>
      {searchFonts.map((font) => (
        <SingleFont
          key={Math.floor(Math.random() * Math.pow(10, 15))}
          font={font}
        ></SingleFont>
      ))}
    </S.FontsContainer>
  )
}

export default Fonts
