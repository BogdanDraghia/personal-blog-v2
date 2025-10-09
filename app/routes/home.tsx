import Hero from '@/components/landing/Hero';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};
export default Home;
