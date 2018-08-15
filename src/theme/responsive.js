import { css } from 'react-emotion'

const breakpoints = {
  mobile: '(max-width: 767px)',
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
