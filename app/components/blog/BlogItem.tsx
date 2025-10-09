import style from "./blogItem.module.css";
import { Link } from "react-router";
import type { BlogPost } from "~/types/blog";

const BlogItem = ({ attributes }: {
    attributes: {
        title: string;
        date: string;
        excerpt: string;
        slug: string;
        thumbnailUrl: string;
    }
}) => {
  const formattedDate = new Date(attributes.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link to={`/blog/${attributes.slug}`}>
      <article className={style.blogItem}>
        <div className={style.blogItemContent}>
          <div className={style.blogItemImageWrapper}>
            <img
              className={style.blogItemImage}
              src={attributes.thumbnailUrl}
              alt={attributes.title}
            />
          </div>
          <h2 className={style.blogTitle}>{attributes.title}</h2>
          <time dateTime={attributes.date} className={style.blogDate}>
            {formattedDate}
          </time>
          <p className={style.blogExcerpt}>
            {attributes.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;