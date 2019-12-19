import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'alliuca.com',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-5950256-7',
    }),
  ],
})

analytics.on('page', ({ payload }) => {
  console.info('page view fired', payload)
})

analytics.on('track', ({ payload }) => {
  console.info('track', payload)
})

if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

export default analytics
