import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `personal-website-v2`,
    siteUrl: `https://www.kutayfurtun.com`,
    navigation: [
      { label: 'About Me', path: '/' },
      { label: 'Resume', path: '/resume' },
      { label: 'Projects', path: '/projects' },
    ],
    header: { name: 'Kutay Furtun', position: 'Software Developer' },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: { trackingIds: ['G-Y442HE8S1D'] },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon-k.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/assets/files`,
        ignore: ['**/.*'],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: `${__dirname}/src`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        pages: `${__dirname}/src/pages`,
        models: `${__dirname}/src/models`,
        theme: `${__dirname}/src/theme`,
        utils: `${__dirname}/src/utils`,
        atoms: `${__dirname}/src/components/atoms`,
        molecules: `${__dirname}/src/components/molecules`,
        organisms: `${__dirname}/src/components/organisms`,
        queries: `${__dirname}/src/components/queries`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
