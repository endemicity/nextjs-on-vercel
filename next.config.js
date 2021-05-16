const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
  });
  
  module.exports = withMDX({
    pageExtensions: ["js", "mdx"],
    future: {
      webpack5: true,
    },
  });