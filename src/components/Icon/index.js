import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import moize from 'moize'
import Icon from './theme'

class IconComponent extends Component {
  state = {
    IconSvg: null,
    iconType: null,
  }

  loadIcon() {
    if (!this.props.type || this.props.type === this.state.iconType) return

    import(`./${this.props.type}`)
      .then(IconSvg => {
        if (!this.__unmounted && IconSvg.default) {
          this.setState({
            iconType: this.props.type,
            IconSvg: moize.react(IconSvg.default, { maxSize: 3 }),
          })
        }
      })
      .catch(e => console.log('error', e))
  }

  componentDidMount() {
    this.loadIcon()
  }

  componentWillUnmount() {
    this.__unmounted = true
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadIcon()
  }

  render() {
    const { children } = this.props
    const { IconSvg } = this.state

    return (
      <Icon {...this.props}>
        {IconSvg && <IconSvg />}
        {children}
      </Icon>
    )
  }
}

IconComponent.defaultProps = {}

IconComponent.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
}

export default IconComponent
