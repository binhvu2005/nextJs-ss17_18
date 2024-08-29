// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // Tạo file robots.txt (tuỳ chọn)
    sitemapSize: 7000,       // Giới hạn số lượng URLs trong mỗi file sitemap
    changefreq: 'daily',     // Tần suất cập nhật của các trang
    priority: 0.7,           // Độ ưu tiên của các trang trong sitemap
  };
  