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

analytics.page()

if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

export default analytics