// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-10-19',
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@nuxt/ui', // https://ui.nuxt.com/
        '@nuxt/content', // https://content.nuxt.com/docs/getting-started
        '@nuxtjs/sitemap', // https://nuxtseo.com/docs/sitemap/getting-started/introduction
        '@nuxtjs/robots', // https://nuxtseo.com/docs/robots/getting-started/introduction
        'nuxt-feedme' // https://nuxt.com/modules/nuxt-feedme
    ],
    css: ['~/assets/css/main.css'],
    content: {
        experimental: { nativeSqlite: true },
    },
    site: {
        url: 'https://final-hill.com',
        title: 'Final Hill'
    },
    feedme: {
        feeds: {
            common: {
                feed: {
                    title: 'Final Hill Feed',
                    link: 'https://final-hill.com/feed.xml',
                    description: 'A feed of the latest content from Final Hill.'
                }
            },
            routes: {
                '/feed.xml': { type: 'rss2' }
            }
        }
    }
})
