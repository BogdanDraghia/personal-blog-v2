import style from './BlogPost.module.css';
import { MDXProvider } from '@mdx-js/react';
import { GiscusComponent } from '@/components/modules/Blog';
import type { Frontmatter } from '~/utils/blog';

interface BlogPostProps {
  frontMatter: Frontmatter;
  Component: React.ComponentType<any>;
}

export default function BlogPost({ frontMatter, Component }: BlogPostProps) {
  return (
    <article className={style.containerBlogPost}>
      <div className={style.blogPostImage}>
        <img src={frontMatter.coverUrl} alt="blog cover image" />
      </div>
      <h1>{frontMatter.title}</h1>
      <div className={style.mdx}>
        <MDXProvider>
          <Component />
        </MDXProvider>
      </div>
      <GiscusComponent />
    </article>
  );
}
