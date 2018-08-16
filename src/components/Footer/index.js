import React from 'react'
import Footer from './theme'
import scrollTo from '../../utils/scrollTo'

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        <strong>alliuca.com</strong>
        <span>&nbsp;&copy; 2018</span>
        <a href="#intro" onClick={() => scrollTo('#intro')}>
          Back to top
        </a>
      </p>
    </Footer>
  )
}

export default FooterComponent
