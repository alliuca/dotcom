import analytics from '../analytics'

export default (gaCat, gaLabel, type = 'click') => {
  analytics.track(type, {
    category: gaCat,
    label: gaLabel,
  })
}
