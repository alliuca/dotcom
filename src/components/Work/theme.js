import styled, { css } from 'react-emotion'
import mq from '../../theme/responsive'

const workStyles = ({ reference }) => {
  switch (reference) {
    case 'muse':
      return css`
        background: var(--muse);
        color: var(--white);

        .js_slide img {
          position: relative;
          top: 4px;

          ${mq.tablet(css`
            max-width: 30%;
          `)};
        }
      `
    case 'skookum-festival':
      return css`
        background: var(--skookum_festival);
        color: var(--white);
      `
    case 'storm-crow':
      return css`
        background: var(--storm_crow);
        color: var(--white);

        .js_slide img {
          position: relative;
          top: 1px;
          left: -1px;
          max-width: 100.5%;

          ${mq.tablet(css`
            max-width: 30%;
          `)};
        }
      `
    case 'michelin':
      return css`
        background: var(--michelin);
        color: var(--white);

        .SectionBackground img {
          transform: scale(1.6) translate(20%, 22%);
        }
      `
    case 'sony-pictures':
      return css`
        background: var(--sony_pictures);
        color: var(--white);

        .SectionBackground img {
          transform: scale(0.9) translate(28%, 5%);

          ${mq.desktop(css`
            transform: scale(0.9) translate(80%, 5%);
          `)};
        }
      `
    case 'jaguar':
      return css`
        background: var(--jaguar);
        color: var(--white);

        .SectionBackground img {
          transform: scale(1.9) translate(24%, 42%);

          ${mq.desktop(css`
            transform: scale(1.9) translate(50%, 42%);
          `)};
        }
      `
    case 'nikon':
      return css`
        background: var(--nikon);
        color: var(--black);

        .SectionBackground img {
          transform: scale(1.7) translate(30%, 50%);

          ${mq.desktop(css`
            transform: scale(2) translate(60%, 50%);
          `)};
        }
      `
    case 'bac':
      return css`
        background: var(--bac);
        color: var(--white);

        .SectionBackground img {
          transform: scale(1.7) translate(30%, 50%);
        }
      `
    case 'nu3':
      return css`
        background: var(--nu3);
        color: var(--black);

        .SectionBackground img {
          transform: scale(1) translate(16%, -5%);

          ${mq.desktop(css`
            transform: scale(1.2) translate(70%, 0%);
          `)};
        }
      `
    case 'yellow-pages':
      return css`
        background: var(--yellow_pages);
        color: var(--black);

        .SectionBackground img {
          transform: scale(1.2) translate(22%, 15%);

          ${mq.desktop(css`
            transform: scale(1.4) translate(40%, 15%);
          `)};
        }
      `
    case 'cpa':
      return css`
        background: var(--cpa);
        color: var(--white);
      `
    case 'ardua':
      return css`
        background: var(--ardua);
        color: var(--black);

        .SectionBackground img {
          transform: scale(1.2) translate(25%, 45%);
        }
      `
    default:
      return null
  }
}

export const PlaceholderContainer = styled.div`
  width: 55%;
  margin: 0 auto;

  ${mq.tablet(css`
    width: 80%;
  `)};
`

const Work = styled.div(
  ({ active, reference }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: var(--default_padding);
    text-align: center;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1); /* easeOutExpo (https://matthewlein.com/ceaser/) */
    transform: translateX(-100%);
    overflow: hidden;

    a {
      color: currentColor;
    }

    h2 {
      margin-top: 0.5em;
    }

    ${active &&
      css`
        transform: translateX(0%);
      `};
    ${reference && workStyles({ reference })};

    .SectionBackground {
      z-index: -1;
      opacity: 0.07;
      max-width: 48em;
      filter: blur(8px);
    }
  `
)

const Close = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: 0;
  color: currentColor;
  cursor: pointer;
`

const Content = styled.div`
  max-width: 48em;
  margin: 0 auto 2.5em;
`

const Gallery = styled.div`
  width: 100%;
  margin-top: auto;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em -1.5em 0;

  > span {
    margin: 0.5em;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

Work.Close = Close
Work.Content = Content
Work.Gallery = Gallery
Work.Technologies = Technologies

export default Work
