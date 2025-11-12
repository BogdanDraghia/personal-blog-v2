import { data } from 'react-router';
import type { Route } from './+types/blog.$slug';
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import GiscusComponent from '~/components/blog/comments/GiscusComponent';
import style from './blogPost.module.css';
type Frontmatter = {
  title: string;
  date: string;
  slug?: string;
  excerpt?: string;
  coverUrl?: string;
};

type MdxModule = {
  default: React.ComponentType<any>;
  frontmatter?: Frontmatter;
};

const postsModules = import.meta.glob<MdxModule>('../../content/blog/*.{md,mdx}', {
  eager: true,
});

function pathToSlug(p: string) {
  return (p.split('/').pop() || '').replace(/\.(md|mdx)$/, '');
}

export function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;

  const match = Object.entries(postsModules).find(([path, mod]: any) => {
    const fm = mod.frontmatter ?? {};
    const fileSlug = fm.slug ?? pathToSlug(path);
    return fileSlug === slug;
  });

  if (!match) {
    throw data({ message: 'Post not found' }, { status: 404 });
  }

  const [path, mod] = match;

  return {
    path,
    frontmatter: mod.frontmatter ?? {},
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: 'Post Not Found' }];
  const f = loaderData.frontmatter as Frontmatter;
  return [
    { title: `${f.title ?? 'Post'} | Blog` },
    { name: 'description', content: f.excerpt ?? '' },
  ];
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { path, frontmatter } = loaderData as {
    path: string;
    frontmatter: Frontmatter;
  };

  const mod = postsModules[path] as MdxModule | undefined;
  const Component = mod?.default;

  if (!Component) {
    return <article className="prose mx-auto">Post component not found.</article>;
  }
  console.log('frontmatter', frontmatter);
  return (
    <article className={`${style.containerBlogPost} ${style.mdx}`}>
      <div>
        <img src={frontmatter.coverUrl} alt="blog cover image" />
      </div>
      <h1>{frontmatter.title}</h1>
      <MDXProvider>
        <Component />
      </MDXProvider>
      <GiscusComponent />
    </article>
  );
}
