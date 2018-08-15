import React from 'react'
import Header from './theme'
import Logo from '../Logo'
import Nav from '../Nav'

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <Logo />
    <Nav />
  </Header>
)

export default HeaderComponent
