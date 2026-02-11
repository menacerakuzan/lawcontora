import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/concierge-login/'],
        },
        sitemap: 'https://granenko-dovzhenko.com/sitemap.xml',
    }
}
