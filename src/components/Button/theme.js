import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mq from '../../theme/responsive'

const Button = styled.a(
  ({ large, small, white }) => css`
    position: relative;
    display: inline-block;
    padding: 1em 1.5em;
    margin: 0 auto;
    background: var(--black);
    border: 2px solid transparent;
    cursor: pointer;
    color: var(--white);
    font-family: var(--font_ctas);
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    ${large &&
      css`
        padding: 1em 1.5em;
        font-size: 0.7em;
      `};
    ${small &&
      css`
        font-size: 0.6em;
        padding: 0.7em 1.2em;

        ${mq.tablet(css`
          padding: 1em 1.5em;
          font-size: 0.7em;
        `)};
      `};
    ${white &&
      css`
        background: var(--white);
        color: var(--black);

        &:hover {
          color: currentColor;
          border-bottom-color: var(--black);
        }
      `};
  `
)

export default Button
