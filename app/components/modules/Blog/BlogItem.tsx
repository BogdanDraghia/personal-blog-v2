import style from './BlogItem.module.css';
import { Link } from 'react-router';

export interface BlogItemProps {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  thumbnailUrl?: string;
}

const BlogItem = ({ title, date, excerpt, slug, thumbnailUrl }: BlogItemProps) => {
  return (
    <Link className={style.blogItemLink} to={`/blog/${slug}`}>
      <div className={style.blogItem}>
        <div className={style.blogItemContent}>
          <div className={style.blogItemImageWrapper}>
            <img
              className={style.blogItemImage}
              src={thumbnailUrl || '/images/blog/default-placeholder.png'}
              alt="imageblog"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <h3>{title}</h3>
          <div>{excerpt}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
