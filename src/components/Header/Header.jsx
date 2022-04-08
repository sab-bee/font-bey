import { NavLink } from 'react-router-dom'
import { Logo, Navbar, Navigation,NavWraper } from '../styles/element'

function Header() {
  return (
    <NavWraper>
      <Navbar>
        <div>
          <NavLink to='/'>
            <Logo>font.bey</Logo>
          </NavLink>
        </div>
        <Navigation>
          <NavLink to='/sans-serif'>Sans Serif</NavLink>
          <NavLink to='/serif'>Serif</NavLink>
          <NavLink to='/display'>Display</NavLink>
        </Navigation>
      </Navbar>
    </NavWraper>
  )
}

export default Header
