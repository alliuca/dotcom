import styled, { css } from 'react-emotion'

const workStyles = ({ reference }) => {
  switch (reference) {
    case 'muse':
      return css`
        background: var(--muse);
        color: var(--white);

        .slider__slide img {
          position: relative;
          top: 4px;
        }
      `
    case 'skookum_festival':
      return css`
        background: var(--skookum_festival);
        color: var(--white);
      `
    case 'storm_crow':
      return css`
        background: var(--storm_crow);
        color: var(--white);

        .slider__slide img {
          position: relative;
          top: 1px;
          left: -1px;
          max-width: 100.5%;
        }
      `
    case 'michelin':
      return css`
        background: var(--michelin);
        color: var(--white);

        .section__background img {
          transform: scale(1.6) translate(20%, 22%);
        }
      `
    case 'sony_pictures':
      return css`
        background: var(--sony_pictures);
        color: var(--white);

        .section__background img {
          transform: scale(0.9) translate(28%, 5%);
        }
      `
    case 'jaguar':
      return css`
        background: var(--jaguar);
        color: var(--white);

        .section__background img {
          transform: scale(1.9) translate(24%, 42%);
        }
      `
    case 'nikon':
      return css`
        background: var(--nikon);
        color: var(--black);

        .section__background img {
          transform: scale(1.7) translate(30%, 50%);
        }
      `
    case 'bac':
      return css`
        background: var(--bac);
        color: var(--white);

        .section__background img {
          transform: scale(1.7) translate(30%, 50%);
        }
      `
    case 'nu3':
      return css`
        background: var(--nu3);
        color: var(--black);

        .section__background img {
          transform: scale(1) translate(16%, -5%);
        }
      `
    case 'yellow_pages':
      return css`
        background: var(--yellow_pages);
        color: var(--black);

        .section__background img {
          transform: scale(1.2) translate(22%, 15%);
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

        .section__background img {
          transform: scale(1.2) translate(25%, 45%);
        }
      `
    default:
      return null
  }
}

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

    .icon--close {
      position: absolute;
      top: var(--default_padding);
      right: var(--default_padding);
    }

    ${active &&
      css`
        transform: translateX(0%);
      `};
    ${reference && workStyles({ reference })};
  `
)

const Content = styled.div`
  max-width: 48em;
  margin: 0 auto 2.5em;
`

const Gallery = styled.div`
  margin-top: auto;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em -1.5em 0;

  .icon {
    margin: 0.5em;
  }
`

Work.Content = Content
Work.Gallery = Gallery
Work.Technologies = Technologies

export default Work
