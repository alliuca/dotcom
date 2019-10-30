import { injectGlobal, css } from 'emotion'
import mq from './responsive'

injectGlobal`
  .u - clearfix {
    &: after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .u - padding {
    padding: var(--default_padding);
  }

  ${mq.mobile(css`
    .hidden-sm {
      display: none;
    }
  `)}

  ${mq.tablet(css`
    .hidden-md {
      display: none;
    }
  `)}
`
