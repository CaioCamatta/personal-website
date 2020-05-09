module.exports = {
  siteMetadata: {
    title: `Caio Camatta`,
    description: `Caio Camatta Coelho's Personal Website and Portfolio.`,
    author: `Caio C Coelho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "caio-camatta-website",
        short_name: "website",
        start_url: "/",
        background_color: "#F65058",
        theme_color: "#F65058",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
