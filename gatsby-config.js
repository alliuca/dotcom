module.exports = {
  siteMetadata: {
    title: 'alliuca.com - a Front End developer story',
    siteUrl: 'https://alliuca.com',
    description:
      "Luca Allievi's portfolio, a box full of HTML5, CSS3, JavaScript and other web stuff.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alliuca',
        short_name: 'Alliuca',
        start_url: '/',
        background_color: '#fdfdfd',
        theme_color: '#fdfdfd',
        display: 'minimal-ui',
        icons: [
          {
            src: '/my-logo48.png',
            type: 'image/png',
            sizes: '48x48',
          },
          {
            src: '/my-logo72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/my-logo96.png',
            type: 'image/png',
            sizes: '96x96',
          },
          {
            src: '/my-logo144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/my-logo168.png',
            sizes: '168x168',
            type: 'image/png',
          },
          {
            src: '/my-logo192.png',
            type: 'image/png',
            sizes: '192x192',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-google-analytics`,
    },
  ],
}
