import Hero from '@/components/landing/Hero';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Hello' }, { name: 'description', content: 'Welcome to my website' }];
}

const Home = () => {
  return <Hero />;
};
export default Home;
