import styled from 'styled-components'

export const NavWraper = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  `

export const Navbar = styled.nav`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  width: 1360px;
  margin: 0 auto;

  & a {
    text-decoration: none;
  }
`
export const Logo = styled.h2`
  color: #31333e;
`

export const Navigation = styled.div`
  display: flex;
  gap: 3.25rem;
`
