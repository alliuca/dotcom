import styled, { css } from 'react-emotion'
import mq from '../../theme/responsive'

const Icon = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;

  ${mq.tablet(css`
    width: 52px;
    height: 52px;
  `)};
`

export default Icon