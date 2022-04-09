import { CustomLink } from '../CustomLink/CustomLink'
import * as S from './Header.Styled'

function Header() {
  return (
    <S.NavbarGroup>
      <S.Navbar>
        <div>
          <CustomLink to='/'>
            <S.Logo>font.bey</S.Logo>
          </CustomLink>
        </div>
        <S.Menu>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/sans-serif'>Sans Serif</CustomLink>
          <CustomLink to='/serif'>Serif</CustomLink>
          <CustomLink to='/display'>Display</CustomLink>
        </S.Menu>
      </S.Navbar>
    </S.NavbarGroup>
  )
}

export default Header
