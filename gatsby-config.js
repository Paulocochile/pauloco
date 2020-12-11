module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: true,
        nodePerFile: `cards`,
      },
    },
  ],
};
