import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Final Hill",
  description: "The Website for Final Hill",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://final-hill.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/final-hill.svg',

    footer: {
      message: '',
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} Final Hill LLC. All Rights Reserved.` +
        ` <a href="/privacy-policy">Privacy&nbsp;Policy</a>`
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Solutions',
        items: [
          {

            text: 'Cathedral',
            link: '/cathedral'
          }
        ]
      },
      { text: 'Libraries', link: '/libraries' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About Us', link: '/about' },
        ]
      },
      {
        text: 'Meta',
        items: [
          { text: 'Privacy Policy', link: '/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/final-hill/' },
      { icon: 'github', link: 'https://github.com/final-hill' }
    ]
  }
})
