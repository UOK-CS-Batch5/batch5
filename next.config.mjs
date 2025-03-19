import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const isProd = process.env.NODE_ENV === "production";

export default withNextra({
  // Ensure the project builds for static export
  output: "export",

  // Support for GitHub Pages
  basePath: isProd ? "/batch5" : "",
  assetPrefix: isProd ? "/batch5" : "",

  // Required if you're using next/image
  images: {
    unoptimized: true,
  },
});
