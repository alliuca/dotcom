import React from 'react'
import Footer from './theme'
import scrollTo from '../../utils/scrollTo'
import gaTrack from '../../utils/gaTrack'

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        <strong>alliuca.com</strong>
        <span>&nbsp;&copy; 2021</span>
        <a
          href="#intro"
          onClick={() => {
            gaTrack('Scroll to section Button', 'Intro')
            scrollTo('#intro')
          }}
        >
          Back to top
        </a>
      </p>
    </Footer>
  )
}

export default FooterComponent
