import style from '@/routes/blog.module.css';
import { Link } from 'react-router';

const BlogItem = ({
  attributes,
}: {
  attributes: {
    title: string;
    date: string;
    excerpt?: string;
    slug: string;
    thumbnailUrl?: string;
  };
}) => {
  return (
    <Link to={`/blog/${attributes.slug}`}>
      <div className={style.blogItem}>
        <div className={style.blogItemContent}>
          <div className={style.blogItemImageWrapper}>
            <img
              className={style.blogItemImage}
              src={attributes.thumbnailUrl || '/images/misc/profile.JPG'}
              alt="imageblog"
              // fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <h3>{attributes.title}</h3>

          <div>{attributes.excerpt}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
