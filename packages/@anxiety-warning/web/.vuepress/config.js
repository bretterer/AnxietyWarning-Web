module.exports = {
  theme: "@anxiety-warning/vuepress-theme-default",
  postcss: { 
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ] 
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
  ]
}