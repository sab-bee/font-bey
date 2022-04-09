import styled from 'styled-components'

export const NavbarGroup = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #64B5F6;
  position: sticky;
  top:0;
`

export const Navbar = styled.nav`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  & a {
    text-decoration: none;
    color: black;
    padding-bottom: 1.6rem;
    border-bottom: 4px solid transparent;
    transition:.2s ease;

    :hover {
      color:#2962FF;
    }
  }
`
export const Logo = styled.h2`
  color: #2962FF;
`

export const Menu = styled.div`
  display: flex;
  gap: 3.25rem;
`

