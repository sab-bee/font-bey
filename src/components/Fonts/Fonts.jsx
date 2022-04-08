import SingleFont from '../SingleFont/SingleFont'
import { FontsContainer } from './Fonts.Styled'

const Fonts = ({ searchFonts, choosedCategory }) => {
  return (
    // prettier-ignore
    <FontsContainer>
      {searchFonts.map((font) => (
        <SingleFont
          key={Math.floor(Math.random() * Math.pow(10, 15))}
          font={font}
          choosedCategory={choosedCategory}>
        </SingleFont>))
      }
    </FontsContainer>
  )
}

export default Fonts
