const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const aliasObj = require("./vue.alias");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    for (const aliasName in aliasObj) {
      config.resolve.alias.set(aliasName, aliasObj[aliasName]);
    }
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./resource/css/variable.scss")],
    },
  },
});
