import { css } from '@emotion/core'

const breakpoints = {
  mobile: '(max-width: 767px)',
  tabletPortrait: '(min-width: 768px) and (orientation: portrait)',
  tabletLandscape: '(min-width: 768px) and (orientation: landscape)',
  tablet: 768,
  desktop: 1024,
  oldIE: 'all and (-ms-high-contrast: none)',
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : '(min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px)'
  accumulator[label] = cls =>
    css`
      @media ${prefix + breakpoints[label] + suffix} {
        ${cls};
      }
    `
  return accumulator
}, {})

export default mq
