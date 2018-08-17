import React from 'react'
import styled, { css } from 'react-emotion'
import mq from '../../theme/responsive'

// const Slider = styled.div(
//   ({ invisible }) => css`
//     position: relative;
//     width: 55%;
//     margin: 0 auto;
//     padding-bottom: 27%;

//     &:before {
//       content: '';
//       display: block;
//       position: absolute;
//       top: 0;
//       left: 0;
//       background: url(/images/work/iphone-transparent.png) 0 0 no-repeat;
//       width: 100%;
//       height: 100%;
//       background-size: 100%;
//       z-index: 1;
//       ${invisible &&
//         css`
//           visibility: hidden;
//         `};
//     }
//   `
// )

const Container = styled.div(
  ({ invisible }) => css`
    position: relative;
    width: 55%;
    margin: 0 auto;
    padding-bottom: 115%;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: url(/images/work/iphone-transparent.png) 0 0 no-repeat;
      width: 100%;
      height: 100%;
      padding-bottom: 27%;
      background-size: 100%;
      z-index: 1;
      ${invisible &&
        css`
          visibility: hidden;
        `};
    }

    ${mq.tablet(css`
      width: 80%;

      &:before {
        background: none;
      }
    `)};

    ${mq.oldIE(css`
      width: 80vw;
    `)};
  `
)

const sliderStyles = css`
  width: 88%;
  transform: translate(7%, 15.5%);

  ${mq.tablet(css`
    width: 100%;
    transform: none;
  `)};
`

const Frame = styled.div`
  position: relative;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  white-space: nowrap;
`

const frameStyles = css`
  position: relative;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  white-space: nowrap;
`

const Slides = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
`

const slidesStyles = css`
  display: block;
  padding: 0;
  margin: 0;
`

const Slide = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
`

const slideStyles = css`
  position: relative;
  display: inline-block;
  width: 100%;
`

const Control = styled.span(
  ({ prev, next }) => css`
    position: absolute;
    top: 20%;
    display: block;
    width: 3em;
    height: 3em;
    transform: translateY(-50%);
    cursor: pointer;
    ${prev &&
      css`
        left: -35%;
      `};
    ${next &&
      css`
        right: -35%;
      `};
  `
)

const controlStyles = ({ prev, next }) => css`
  position: absolute;
  top: 20%;
  display: block;
  width: 3em;
  height: 3em;
  transform: translateY(-50%);
  cursor: pointer;
  ${prev &&
    css`
      left: -35%;

      ${mq.tablet(css`
        left: -5%;
      `)};
    `};
  ${next &&
    css`
      right: -35%;

      ${mq.tablet(css`
        right: -5%;
      `)};
    `};
`

const Slider = React.forwardRef((props, ref) => (
  <div {...props} ref={ref} className={`js_slider ${sliderStyles}`}>
    {props.children}
  </div>
))

Slider.Container = Container

Slider.Frame = props => (
  <div {...props} className={`js_frame ${frameStyles}`}>
    {props.children}
  </div>
)
Slider.Slides = props => (
  <ul {...props} className={`js_slides ${slidesStyles}`}>
    {props.children}
  </ul>
)
Slider.Slide = props => (
  <li {...props} className={`js_slide ${slideStyles}`}>
    {props.children}
  </li>
)
Slider.Control = props => (
  <span
    {...props}
    className={`js_${props.prev ? 'prev' : 'next'} ${controlStyles({
      prev: props.prev,
      next: props.next,
    })}`}
  >
    {props.children}
  </span>
)

export default Slider
