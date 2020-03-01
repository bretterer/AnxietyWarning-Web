module.exports = {
  theme: "@anxiety-warning/vuepress-theme-default",
  postcss: { 
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ] 
  }
}