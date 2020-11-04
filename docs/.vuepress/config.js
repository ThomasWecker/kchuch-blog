const config = require('./data/config.json');
const base = process.env.BASE ? { base: process.env.BASE } : {}

module.exports = Object.assign(config, base, {
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    '@goy/svg-icons'
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  }
});