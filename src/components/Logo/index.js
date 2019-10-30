import React from 'react'
import Logo from './theme'
import myLogo from '../../images/my-logo.svg'

const LogoComponent = () => {
  return (
    <Logo href="/" clLogossName="logo" itemProp="url">
      <img src={myLogo} alt="alliuca.com logo" itemProp="logo" />
    </Logo>
  )
}

export default LogoComponent
