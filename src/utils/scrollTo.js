// https://gist.github.com/andjosh/6764939

export default (to, duration = 1000) => {
  let animation
  const windowScrollTop =
    (window.pageYOffset || document.documentElement.scrollTop) -
    (document.documentElement.clientTop || 0)
  const start = windowScrollTop
  const end = document.querySelector(`section${to}`).offsetTop + 1
  const easeOutExpo = t => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1)
  let startTime
  let timeLapsed = 0

  const animateScroll = timestamp => {
    if (!startTime) startTime = timestamp
    timeLapsed += timestamp - startTime
    const easing = easeOutExpo(timeLapsed / duration)
    window.scrollTo(0, Math.floor(start + easing * (end - start)))
    if (timeLapsed < duration) {
      animation = window.requestAnimationFrame(animateScroll)
      startTime = timestamp
    } else {
      animation = null
      startTime = null
    }
  }

  window.requestAnimationFrame(animateScroll)
}
