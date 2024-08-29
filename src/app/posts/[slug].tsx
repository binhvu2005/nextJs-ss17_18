import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
const slugify = (title: string): string => {
    return title
      .toLowerCase() // Chuyển tất cả thành chữ thường
      .trim() // Loại bỏ khoảng trắng ở đầu và cuối
      .replace(/[^\w\s-]/g, '') // Loại bỏ các ký tự không mong muốn
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/-+/g, '-'); // Thay thế nhiều dấu gạch ngang liên tiếp bằng một dấu
  };

const Post = ({ post }: { post: any }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Giả sử bạn có một danh sách bài viết
  const posts = [
    { id: 1, title: 'My First Post' },
    { id: 2, title: 'Another Interesting Post' }
  ];

  // Tạo đường dẫn cho mỗi bài viết
  const paths = posts.map((post) => ({
    params: { slug: slugify(post.title) },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Tìm bài viết dựa trên slug
  const posts = [
    { id: 1, title: 'My First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Another Interesting Post', content: 'This is some other content.' }
  ];

  const post = posts.find((post) => slugify(post.title) === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default Post;
