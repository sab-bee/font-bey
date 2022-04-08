import { CustomLink } from '../CustomLink/CustomLink'
import { Logo, Navbar, Navigation, NavWraper } from '../styles/element'

function Header() {
  return (
    <NavWraper>
      <Navbar>
        <div>
          <CustomLink to='/'>
            <Logo>font.bey</Logo>
          </CustomLink>
        </div>
        <Navigation>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/sans-serif'>Sans Serif</CustomLink>
          <CustomLink to='/serif'>Serif</CustomLink>
          <CustomLink to='/display'>Display</CustomLink>
        </Navigation>
      </Navbar>
    </NavWraper>
  )
}

export default Header
