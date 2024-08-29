import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3000'; 
  
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date().toISOString(),
    },
    // Thêm các URL khác nếu cần
  ];
}
