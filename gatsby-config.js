module.exports = {
  siteMetadata: {
    title: `be. Pilates & Yoga - Bahçeşehir Aletli Pilates`,
    description: `Bahçeşehir'de pilates ve yoga studyomuzda herkes için bir ders planımız mevcut.`,
    author: `bepilatesyoga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "INSERT_HERE_YOUR_CONSUMER_KEY",
          consumer_secret: "INSERT_HERE_YOUR_CONSUMER_SECRET",
          bearer_token: "INSERT_HERE_YOUR_BEARER_TOKEN",
        },
        queries: {
          nameofthequery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "gatsbyjs",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          nameofanotherthequery: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
