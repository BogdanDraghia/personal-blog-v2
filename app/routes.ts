import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/blog', 'routes/blog.tsx'),
  route('/blog/:slug', 'routes/blog.$slug.tsx'),
  route('/contact', 'routes/contact.tsx'),
  route('/projects', 'routes/project.tsx'),
  route('/illustrations', 'routes/illustrations.tsx'),
] satisfies RouteConfig;
