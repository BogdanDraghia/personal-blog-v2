import type { Route } from './+types/blog';

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

  return (
    <>
      <div>Blog Page</div>
      <div>List:</div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
