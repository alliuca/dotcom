export default (gaCat, gaLabel, type = 'click') => {
  if (window.ga) {
    window.ga('send', 'event', gaCat, type, gaLabel)
  }
}
