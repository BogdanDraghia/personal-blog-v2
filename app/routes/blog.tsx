import type { Route } from './+types/blog';
import BlogItem from '@/components/blog/BlogItem';
import style from './blog.module.css';
type PostMod = {
  attributes: { title: string; date: string; slug?: string; excerpt?: string };
  html: string;
};

const modules = import.meta.glob<PostMod>('../../content/blog/*.md', { eager: true });

function pathToSlug(p: string) {
  return (p.split('/').pop() || '').replace(/\.md$/, '');
}

const posts = Object.entries(modules).map(([path, mod]) => {
  const slug = mod.attributes.slug ?? pathToSlug(path);
  return { ...mod.attributes, slug };
});

export function meta() {
  return [{ title: 'Blog | My Site' }, { name: 'description', content: 'Articles and tutorials' }];
}

export function loader() {
  return { posts };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  console.log(posts);
  return (
    <>
      <div className={style.wrapBlog}>
        <div className={style.centerSection}>
          <div className={style.subContentContainer}>
            <div className={style.postSection}>
              {posts.map((post, index) => (
                <BlogItem attributes={post} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
