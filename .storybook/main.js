const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')
module.exports = {
  addons: [   
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },],
  stories: [...getStoriesPaths(), "../styles/globals.css"]
}