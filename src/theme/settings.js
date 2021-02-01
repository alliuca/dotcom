import { injectGlobal, css } from '@emotion/css'
import mq from './responsive'

injectGlobal`
  :root {
    /* colors */
    --white: #fdfdfd;
    --black: #1d1d1d;
    --red: #f42b39;
    --grey: #cdcdcd;
    --green: #488f45;
    --muse: #c42aa2;
    --skookum_festival: #38077f;
    --storm_crow: #42bdf1;
    --michelin: #2e4996;
    --sony_pictures: #1d1d1d;
    --jaguar: #567a60;
    --nikon: #ffdc01;
    --bac: #119bbc;
    --nu3: #7cc7c8;
    --yellow_pages: #feda2d;
    --cpa: #a50010;
    --ardua: #f1efef;
    --color-vancouver: #d6dedc;
    --color-amsterdam: #f18857;
    --color-berlin: #a8adb1;
    --color-malta: #f6dbbd;
    --color-adro: #a2b538;
    /* sizes */
    --site_max_width: 1980px;
    --default_padding: 2em;
    --default_font_size: 12;
    --default_line_height: 21;
    /* fonts */
    --font_standard: Helvetica, Arial, sans-serif;
    --font_body: 'Open Sans', Helvetica, Arial, sans-serif;
    --font_ctas: 'Open Sans', Helvetica, Arial, sans-serif;

    ${mq.tablet(css`
      --default_font_size: 16;
      --default_line_height: 27;
    `)}

    ${mq.desktop(css`
      --default_font_size: 16;
    `)};
  }
`
