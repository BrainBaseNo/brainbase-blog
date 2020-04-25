module.exports = {
  siteMetadata: {
    title: 'BrainBase Blogg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BrainBase blogg',
        short_name: 'BrainBase blogg',
        start_url: '/',
        background_color: '#6bab90',
        theme_color: '#6bab90',
        display: 'minimal-ui',
        icon: `${__dirname}/assets/images/brain-green-dark-64.png`,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeStyleHashes: false,
        directives: {
          'default-src': "'self'",
          'font-src': "'self' fonts.gstatic.com",
          'script-src': "'self' 'unsafe-eval' www.google-analytics.com",
          'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
          'img-src':
            "'self' data: *.medium.com *.licdn.com www.google-analytics.com",
        },
      },
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [`gatsby-remark-emoji`, `gatsby-remark-reading-time`],
      },
    },
  ],
}
