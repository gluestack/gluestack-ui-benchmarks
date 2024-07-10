process.env.TAMAGUI_TARGET = "native"; // Don't forget to specify your TAMAGUI_TARGET here
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
        {
          include: "TAMAGUI_TARGET",
        },
      ],
      "nativewind/babel",
    ],
  };
};
