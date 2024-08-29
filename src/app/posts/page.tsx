

import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '../compoments/Breadcrumbs';
import Link from 'next/link';

const slugify = (title: string): string => {
  return title
    .toLowerCase() // Chuyển tất cả thành chữ thường
    .trim() // Loại bỏ khoảng trắng ở đầu và cuối
    .replace(/[^\w\s-]/g, '') // Loại bỏ các ký tự không mong muốn
    .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-'); // Thay thế nhiều dấu gạch ngang liên tiếp bằng một dấu
};

export const metadata: Metadata = {
  title: 'Danh sách bài viết',
  description: 'Danh sách các bài viết về nhiều chủ đề khác nhau.',
  keywords: ['blog', 'bài viết', 'Next.js', 'danh sách'],
};

const posts = [
  {
    id: 1,
    title: 'Accusamus beatae ad facilis',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    title: 'Reprehenderit est deserunt',
    thumbnailUrl: 'https://via.placeholder.com/150/1f8817',
  },
  {
    id: 3,
    title: 'Officia porro iure quia',
    thumbnailUrl: 'https://via.placeholder.com/150/ff7675',
  },
  {
    id: 4,
    title: 'Qui eius qui autem sed',
    thumbnailUrl: 'https://via.placeholder.com/150/0984e3',
  },
  {
    id: 5,
    title: 'Epudiandae iusto deleniti',
    thumbnailUrl: 'https://via.placeholder.com/150/00b894',
  },
  {
    id: 6,
    title: 'Iusto sunt nobis quasi veritatis',
    thumbnailUrl: 'https://via.placeholder.com/600/ffeaa7',
  },
];

export default function PostsPage() {
  const jsonLdD = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hướng dẫn sử dụng JSON-LD trong Next.js",
    "description": "Bài viết này hướng dẫn cách sử dụng JSON-LD để tối ưu hóa SEO trong Next.js.",
    "author": {
      "@type": "Person",
      "name": "Nguyễn Văn A"
    },
    "datePublished": "2024-08-29"
  };
  return (
    <div>
     <section>
      <script type='application/ld+json'
      dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLdD)}}/>
     </section>
      <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Danh sách bài viết</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              width: '150px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <Image src={post.thumbnailUrl} alt={post.title} width={150} height={150} loading='lazy'/>
            <div style={{ padding: '10px', textAlign: 'center' }}>
            <Link href={`/posts/${slugify(post.title)}`}  style={{ fontSize: '14px', margin: '0' }}>
            {post.title}
          </Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
