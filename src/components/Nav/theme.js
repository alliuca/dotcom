import styled from '@emotion/styled'

const Nav = styled.nav``

const MainNav = styled.ul`
  display: flex;
  list-style: none;
`

const MainNavItem = styled.li`
  font-size: 0.9em;
`

const MainNavItemLink = styled.a`
  border-bottom-width: 0;
  border-bottom-color: transparent;

  &:hover {
    border-bottom-width: 0.1em;
    border-bottom-color: var(--black);
    color: var(--black);
  }
`

Nav.MainNav = MainNav
Nav.MainNavItem = MainNavItem
Nav.MainNavItemLink = MainNavItemLink

export default Nav
