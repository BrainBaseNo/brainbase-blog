module.exports = {
  siteMetadata: {
    title: 'BrainBase Blogg',
    description: '',
    siteUrl: 'https://blogg.brainbase.no',
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeStyleHashes: false,
        directives: {
          'default-src': "'self'",
          'font-src': "'self' fonts.gstatic.com",
          'script-src': "'self' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com",
          'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
          'img-src':
            "'self' data: *.brainbase.no *.medium.com *.licdn.com www.google-analytics.com www.googletagmanager.com",
          'connect-src': "'self' www.google-analytics.com www.googletagmanager.com",
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
        plugins: [`gatsby-remark-emoji`, `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + '/post' + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + '/post' + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'BrainBase Blogg',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-70852558-2"],
      },
    }
  ],
}
