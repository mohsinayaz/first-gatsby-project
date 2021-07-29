module.exports = {
  pathPrefix: "/first-gatsby-project",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Second GatsBy Project",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
