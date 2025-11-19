export type Frontmatter = {
  title: string;
  date: string;
  slug?: string;
  excerpt?: string;
  coverUrl?: string;
};

export type MdxModule = {
  default: React.ComponentType<any>;
  frontmatter?: Frontmatter;
};

export const pathToSlug = (path: string) => {
  return (path.split('/').pop() || '').replace(/\.(md|mdx)$/, '');
};

export const findBlogPostBySlug = (slug: string, postsModules: Record<string, MdxModule>) => {
  return Object.entries(postsModules).find(([path, mod]: [string, MdxModule]) => {
    const fm = mod.frontmatter ?? { title: '', date: '' };
    const fileSlug = fm.slug ?? pathToSlug(path);
    return fileSlug === slug;
  });
};

export const findAllPosts = (postModules: Record<string, MdxModule>) => {
  return Object.entries(postModules).map(([path, mod]: [string, any]) => {
    const fm = mod.frontmatter;
    const slug = fm.slug ?? pathToSlug(path);

    return {
      ...fm,
      slug,
    };
  });
};
