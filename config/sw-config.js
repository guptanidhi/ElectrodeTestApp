module.exports = {
  cache: {
    cacheId: "Hello-Electrode",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "Hello-Electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
