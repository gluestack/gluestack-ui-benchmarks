const path = require("path");
const myBabel = require("@gluestack-style/babel-plugin-styled-resolver");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        myBabel,
        {
          configPath: path.join(__dirname, "./gluestack-ui.config.ts"),
          configThemePath: ["theme"],
          styled: ["@gluestack-ui/themed"],
          components: ["@gluestack-ui/themed"],
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.js",
          logTimings: true,
        },
      ],
      [
        "transform-inline-environment-variables",
      ],
      "nativewind/babel",
    ],
  };
};
