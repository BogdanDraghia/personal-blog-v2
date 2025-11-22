import type { Config } from '@react-router/dev/config';
import path from 'path';
import fg from 'fast-glob';

export default {
  ssr: true,
  async prerender() {
    const files = await fg('content/blog/*.mdx');
    const slugs = files.map((f) => `/blog/${path.basename(f, '.mdx')}`);
    console.log('Prerendering slugs:', slugs);
    return ['/', '/blog/', '/contact', ...slugs];
  },
  buildDirectory: 'build',
} satisfies Config;
