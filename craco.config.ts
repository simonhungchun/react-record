// const Icons = require("unplugin-icons/webpack");
// const IconsResolver = require("unplugin-icons/resolver");
// const AutoImport = require("unplugin-auto-import/webpack");
module.exports = {
  // plugins: [
  //   {
  //     plugin: {
  //       overrideWebpackConfig: ({
  //         webpackConfig,
  //         cracoConfig,
  //         pluginOptions,
  //         context: { env, paths },
  //       }) => {
  //         webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
  //           (p) => p.constructor.name !== "ModuleScopePlugin"
  //         );
  //         return webpackConfig;
  //       },
  //     },
  //   },
  // ],
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://192.168.122.36:8888",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  webpack: {
    // plugins: [
    //   Icons({
    //     compiler: "jsx",
    //     jsx: "react",
    //   }),
    //   AutoImport({
    //     resolvers: [
    //       IconsResolver({
    //         prefix: "icon",
    //         extension: "jsx",
    //       }),
    //     ],
    //   }),
    // ],
  },
};
export {};
