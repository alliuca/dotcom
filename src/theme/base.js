import { injectGlobal } from 'emotion'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&subset=latin');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background: var(--white);
    font-family: var(--font_body);
    font-size: calc(var(--default_font_size) * 1px);
    line-height: calc(var(--default_line_height) / var(--default_font_size));
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: var(--black);
    text-decoration: none;
    border-bottom: .1em solid currentColor;
    transition: border .2s linear, color .2s linear;

    &:hover {
      color: var(--white);
      border-bottom-color: var(--white);
    }
  }

  nav a {
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
  }

  .hide {
    display: none;
  }

  .invisible {
    visibility: hidden;
  }

  .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .icon--arrow-left,
  .icon--arrow-right {
    width: 1.7em;
    height: 1.7em;
    border-top: .2em solid currentColor;
    border-right: .2em solid currentColor;
    transform: rotate(-135deg);
    cursor: pointer;
  }

  .icon--arrow-right {
    transform: rotate(45deg);
  }

  .icon--close {
    width: 1.7em;
    height: 1.7em;

    &:before,
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 2em;
      height: .2em;
      background: currentColor;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`
