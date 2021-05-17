module.exports = {
  pathPrefix: `nasz-okraj`,
  siteMetadata: {
    title: "projekt",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@react-icons/all-files`,
/*     {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        custom: [
          {
            name: ["Mulish", "MulishBold", "MulishExtraBold", "MulishSemiBold", "MulishBlack"],
            file: "src/style/fonts.css",
          },
        ],
      },
    }, */
/*     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      }
    }, */
   /*  {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }, */
    {
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: [
              '400',
              '400i',
              '700',
              '700i',
            ],
            subsets: [
              'latin-ext',
            ],
          },
        ],
      },
    },
    `gatsby-plugin-minify`
    
  ],
};
