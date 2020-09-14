import { resolve } from 'path'
import { gatsbyRemarkPlugins } from './gatsby-remark-plugins'

const root = resolve(__dirname, '..')

const gatsbyConfig = {
  siteMetadata: {},
  plugins: [
    { resolve: 'gatsby-plugin-pnpm' },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${root}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${root}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: { gatsbyRemarkPlugins },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${root}/node_modules/@app/example-packages/example-packages`,
      },
    },
    { resolve: 'gatsby-transformer-json' },
    { resolve: '@app/gatsby-plugin-codesandbox' },
    { resolve: 'example-packages-to-codesandbox' },
  ],
}

export default gatsbyConfig
