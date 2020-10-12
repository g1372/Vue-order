module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    "transform-runtime",
    [
      "component",
      [
        {
          libraryName: "mint-ui",
          style: true,
        },
      ],
    ],
  ],
};
