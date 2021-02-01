import styled from '@emotion/styled'
import { css } from '@emotion/react'
import mq from '../../theme/responsive'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: calc(var(--default_padding) / 2) var(--default_padding);
  background: var(--black);
  font-size: 0.85em;

  p {
    width: 100%;
    color: var(--white);
    text-align: center;
  }

  span {
    display: inline-block;
    margin-right: 1.2em;
  }

  a {
    color: var(--white);

    &:hover {
      border-bottom-color: #999;
    }
  }

  ${mq.tablet(css`
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
  `)};
`

export default Footer
