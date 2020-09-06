module.exports = {
  siteMetadata: {
    title: `Luis Barrios`,
    author: {
      name: `Luis Barrios`,
      summary: `a Software Engineer based in Dublin, Ireland.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://lbarrios.es`,
    social: {
      linkedin: `lbarriosh`,
      twitter: `lbarriosh`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Barrios`,
        short_name: `Luis Barrios`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ef5252`,
        display: `minimal-ui`,
        icon: `content/assets/flame.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `@pauliescanlon/gatsby-remark-sticky-table`
        ],
      },
    }
  ],
}
