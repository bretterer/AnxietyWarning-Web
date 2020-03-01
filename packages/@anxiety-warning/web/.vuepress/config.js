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
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-17477286-13' 
      }
    ]
  ]
}