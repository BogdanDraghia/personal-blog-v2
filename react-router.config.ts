import type { Config } from '@react-router/dev/config';
import path from 'path';
import fg from 'fast-glob';

export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    const staticPaths = getStaticPaths();

    const files = await fg('content/blog/*.mdx');
    const slugs = files.map((f) => `/blog/${path.basename(f, '.mdx')}`);

    return [...staticPaths, '/contact', ...slugs];
  },
} satisfies Config;
