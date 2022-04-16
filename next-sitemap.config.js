/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://rens.vercel.app',
    generateRobotsTxt: true, // (optional)
};
