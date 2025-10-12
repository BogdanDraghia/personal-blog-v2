import type { Config } from '@react-router/dev/config';
import path from 'path';
import fg from 'fast-glob';

export default {
  ssr: false,
  async prerender() {
    const files = await fg('content/blog/*.md');
    const slugs = files.map((f) => `/blog/${path.basename(f, '.md')}`);
    console.log('Prerendering slugs:', slugs);
    return ['/', '/blog', '/contact', ...slugs];
  },
} satisfies Config;
