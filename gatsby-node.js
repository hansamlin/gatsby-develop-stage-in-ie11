/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  actions,
  stage,
  loaders,
}) {
  if (stage === "develop") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-refresh-webpack-plugin/,
            use: [loaders.js()],
          },
        ],
      },
    });
  }
};
