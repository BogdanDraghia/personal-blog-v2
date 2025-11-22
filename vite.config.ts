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

const rehypeOptions = {
  theme: 'github-dark',
  grid: true,
};

export default defineConfig({
  build: {
    assetsDir: 'assets',
  },
  plugins: [
    tailwindcss(),
    mdx({
      jsxImportSource: 'react',
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
      rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypeOptions]],
    }),
    reactRouter(),
    tsconfigPaths(),
    imagetools(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
});
