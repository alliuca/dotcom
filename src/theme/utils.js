import { Global, css } from '@emotion/core'
import mq from './responsive'

export const GlobalStylesUtils = () => (
  <Global styles={
    css`
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
  } />
);
