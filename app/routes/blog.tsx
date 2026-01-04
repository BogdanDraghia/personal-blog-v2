import BlogList from '~/components/modules/Blog/BlogList';
import type { Route } from './+types/blog';
import { findAllPosts, type MdxModule } from '~/utils/blog';
import type { BlogItemProps } from '~/components/modules/Blog/BlogItem';

const postsModules = import.meta.glob<MdxModule>('../../content/blog/*.{md,mdx}', { eager: true });
const posts: BlogItemProps[] = findAllPosts(postsModules);

export function meta() {
  return [{ title: 'Blog | My Site' }, { name: 'description', content: 'Articles and tutorials' }];
}

export function loader() {
  return { posts };
}

export default function Blog({ loaderData }: Route.MetaArgs) {
  const { posts } = loaderData;

  return (
    <div className="content">
      <h1>Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}
