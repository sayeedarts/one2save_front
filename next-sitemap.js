const siteUrl = process.env.NEXT_PUBLIC_APP_URL

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/user', '/auth'],
            },
        ],
    },
    exclude: ["/user"],
}