import styled, { css } from 'react-emotion'
import Button from '../Button'
import mq from '../../theme/responsive'

const placeStyles = ({ place }) => {
  switch (place) {
    case 'vancouver':
      return css`
        &:after {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--color-vancouver) 58%
          );
        }
      `
    case 'amsterdam':
      return css`
        &:after {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--color-amsterdam) 40%
          );
        }

        ${ContentLogo} img {
          top: 51%;
        }
      `
    case 'berlin':
      return css`
        &:after {
          background: linear-gradient(transparent, var(--color-berlin) 30%);
        }

        ${ContentLogo} img {
          top: 45%;
        }
      `
    case 'malta':
      return css`
        &:after {
          background: linear-gradient(transparent, var(--color-malta) 20%);
        }
      `
    case 'adro':
      return css`
        &:after {
          background: linear-gradient(transparent, var(--color-adro) 20%);
        }
      `
    default:
      return null
  }
}

const Section = styled.section(
  ({ place, isContactFooter }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding: var(--default_padding);
    overflow: hidden;
    ${place &&
      css`
        background: var(${`--color-${place}`});

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
          width: 100%;
          height: 80%;

          ${mq.desktop(css`
            height: 60vh;
          `)};

          ${mq.tabletPortrait(css`
            bottom: 25vh;
          `)};
        }
      `};

    ${place && placeStyles({ place })};

    ${isContactFooter &&
      css`
        align-items: center;
        height: 70vh;

        ${mq.tabletLandscape(css`
          height: 80vh;
        `)};

        ${mq.tablet(css`
          flex-direction: row;
          height: 50vh;
        `)};

        ${Content} {
          align-items: flex-start;
          text-align: left;
          padding-bottom: 0;

          ${mq.tablet(css`
            max-width: 36em;
            margin: 0 2em;
            padding-bottom: 2em;
          `)};

          ${mq.oldIE(css`
            display: block;
          `)};

          &:first-child {
            justify-content: flex-end;
          }

          &:last-child {
            justify-content: flex-start;

            ${mq.tablet(css`
              padding-top: 56px;
            `)};
          }
        }

        ${ContentHeading2} {
          margin-top: 1em;
        }

        a {
          &:hover {
            color: var(--green);
            border-bottom-color: var(--green);
          }
        }
      `};
  `
)

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  max-width: 48em;
  padding-bottom: calc(var(--default_padding) * 1);
  margin: 0 auto;
  text-align: center;

  ${mq.tablet(css`
    padding-bottom: 0;
  `)};
`

const ContentIntroMain = styled.div`
  margin-top: auto;
`

const ContentHeading = styled.h1`
  margin-bottom: 0;

  & + * {
    margin-top: 0.5em;
  }
`

const ContentHeading2 = styled.h2`
  margin-bottom: 0;

  & + * {
    margin-top: 0.5em;
  }
`

const ContentCtaButton = styled(Button)(
  ({ scroll }) => css`
    display: inline-block;
    margin: auto 0 1em;
    ${scroll &&
      css`
        position: absolute;
        left: 50%;
        bottom: 3em;
        margin-top: 0;
        transform: translateX(-50%);

        ${mq.tabletLandscape(css`
          bottom: 1em;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
        `)};

        ${mq.tablet(css`
          padding: 1em 1.5em;
          font-size: 0.7em;
        `)};
      `};
  `
)

const ContentLogo = styled.div`
  position: relative;
  display: inline-block;
  width: 3.6em;
  min-height: 3.6em;
  background: var(--white);
  border-radius: 100%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0.8em;
    transform: translate(-50%, -50%);
  }
`

const ContentLocation = styled.h4`
  margin: 0.7em 0 1.8em;

  ${mq.tablet(css`
    margin-bottom: 0;
  `)};
`

const ContentCopy = styled.p``

const ContentCtas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -1.3em;

  ${ContentCtaButton} {
    margin: 1em;
  }
`

const ContentNote = styled.div`
  position: absolute;
  left: 50%;
  bottom: -0.8em;
  width: 100%;
  transform: translateX(-50%);
  font-size: 0.75em;
`

const Background = styled.div`
  position: absolute;
  top: -1%;
  left: 0;
  z-index: 0;
  width: 100%;
  opacity: 0.25;
  filter: blur(3px);

  img {
    min-width: 100%;
  }

  ${mq.desktop(css`
    top: -2%;
  `)};
`

Section.Content = Content
Section.ContentIntroMain = ContentIntroMain
Section.ContentHeading = ContentHeading
Section.ContentHeading2 = ContentHeading2
Section.ContentCtaButton = ContentCtaButton
Section.ContentLogo = ContentLogo
Section.ContentLocation = ContentLocation
Section.ContentCopy = ContentCopy
Section.ContentCtas = ContentCtas
Section.ContentNote = ContentNote
Section.Background = Background

export default Section
