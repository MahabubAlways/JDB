require('dotenv').config();

const siteUrl = process.env.GATSBY_SITE_URL;
const siteGraphql = process.env.GATSBY_SITE_ADMIN_URL + "/graphql";
const googleAnalytics = process.env.GATSBY_GOOGLE_ANALYTICS;

module.exports = {
  siteMetadata: {
    title: `JDB 2M`,
    description: `JDB 2M`,
    author: `@Alex`,
    siteUrl: siteUrl
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     sitemapSize: 5000
    //   }
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Barlow",
              variants: ["400", "500", "600", "700"],
            },
            {
              family: "Playfair Display:ital",
              variants: ["400", "400i", "600", "600i", "800", "800i"],
            },
          ]
        }
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: siteGraphql,
        useACF: true,
        html: {
          useGatsbyImage: true,
          createStaticFiles: true,
          imageMaxWidth: 1500,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [750, 1080, 1366, 1920]
        }
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
  ],
};
