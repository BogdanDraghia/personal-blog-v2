import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { imagetools } from 'vite-imagetools';
import mdx from '@mdx-js/rollup';

import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
export default defineConfig({
  plugins: [
    tailwindcss(),
    mdx({
      jsxImportSource: 'react',
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
      rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: 'github-dark' }]],
    }),
    reactRouter(),
    tsconfigPaths(),
    imagetools(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
});
