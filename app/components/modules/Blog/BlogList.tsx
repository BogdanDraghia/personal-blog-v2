import type { BlogItemProps } from './BlogItem';
import BlogItem from './BlogItem';
import style from './BlogList.module.css';

interface BlogListProps {
  posts: BlogItemProps[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className={style.blogList}>
      {posts.map((post, index) => (
        <BlogItem {...post} key={index} />
      ))}
    </div>
  );
}
