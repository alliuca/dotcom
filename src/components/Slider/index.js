import React, { Component } from 'react'
import { lory } from 'lory.js'
import Slider from './theme'
import Picture from '../Picture'

class SliderComponent extends Component {
  constructor(props) {
    super(props)
    this.slider = React.createRef()
  }

  componentDidMount() {
    if (this.props.slides.length > 1) this.lory = lory(this.slider.current, {})
    this.lorySetup()
    window.addEventListener('resize', this.lorySetup)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.lorySetup)
  }

  lorySetup = () => {
    if (this.lory) setTimeout(() => this.lory.setup(), 0)
  }

  render() {
    const { slides } = this.props

    return (
      <Slider.Container>
        <Slider ref={this.slider}>
          <Slider.Frame>
            <Slider.Slides>
              {slides.map((slide, index) => (
                <Slider.Slide key={index}>
                  <Picture imageSet={slide.image_set} />
                </Slider.Slide>
              ))}
            </Slider.Slides>
          </Slider.Frame>
          {slides.length > 1 && (
            <>
              <Slider.Control prev="true">
                <span className="icon icon--arrow-left" />
              </Slider.Control>
              <Slider.Control next="true">
                <span className="icon icon--arrow-right" />
              </Slider.Control>
            </>
          )}
        </Slider>
      </Slider.Container>
    )
  }
}

export default SliderComponent
