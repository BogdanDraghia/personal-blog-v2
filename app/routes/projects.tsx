import { type LoaderFunctionArgs } from 'react-router';
import { useLoaderData, Link } from 'react-router';
import { useMemo, useState } from 'react';
import { LazyMotion, m, domMax, AnimatePresence } from 'framer-motion';
import style from './projects.module.css';
import TagFilter from '~/components/projects/TagFilter';
import ProjectItem from '~/components/projects/ProjectItem';

const categories = [
  { attributes: { categoryName: 'UI' } },
  { attributes: { categoryName: 'E-commerce' } },
  { attributes: { categoryName: 'Open Source' } },
  { attributes: { categoryName: '3D' } },
  { attributes: { categoryName: 'Animation' } },
  { attributes: { categoryName: 'Landing Page' } },
  { attributes: { categoryName: 'Data Viz' } },
  { attributes: { categoryName: 'Tooling' } },
];

const projects = [
  {
    id: 1,
    attributes: {
      title: 'Mareamea Shopfront',
      content:
        'A minimal e-commerce storefront for handmade felt decor with a clean, ocean-inspired palette.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'E-commerce' } },
          { attributes: { categoryName: 'UI' } },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      title: 'Project Atlas',
      content:
        'Interactive data visualization dashboards featuring animated charts and filterable panels.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'Data Viz' } },
          { attributes: { categoryName: 'UI' } },
        ],
      },
    },
  },
  {
    id: 3,
    attributes: {
      title: 'Feather UI Kit',
      content:
        'An open-source component kit with strong a11y: focus states, keyboard nav, and screen-reader support.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'Open Source' } },
          { attributes: { categoryName: 'Tooling' } },
        ],
      },
    },
  },
  {
    id: 4,
    attributes: {
      title: 'Landing Breeze',
      content: 'High-performance landing page with hero animations and responsive imagery.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'Landing Page' } },
          { attributes: { categoryName: 'Animation' } },
        ],
      },
    },
  },
  {
    id: 5,
    attributes: {
      title: 'Craft Studio 3D',
      content: 'Lightweight 3D product previews and hover interactions, optimized for mobile.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [{ attributes: { categoryName: '3D' } }, { attributes: { categoryName: 'UI' } }],
      },
    },
  },
  {
    id: 6,
    attributes: {
      title: 'Motion Gallery',
      content: 'Animated cards with Framer Motion transitions, staggered lists, and smart exits.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'Animation' } },
          { attributes: { categoryName: 'UI' } },
        ],
      },
    },
  },
  {
    id: 7,
    attributes: {
      title: 'Builder Tools',
      content: 'Developer tooling for route loaders, typed fetchers, and form actions.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'Tooling' } },
          { attributes: { categoryName: 'Open Source' } },
        ],
      },
    },
  },
  {
    id: 8,
    attributes: {
      title: 'Showcase Grid',
      content:
        'Responsive project grid with tag-based filtering, instant search, and graceful empty states.',
      thumbnailUrl: '/images/blog/test-image.jpg',
      categories: {
        data: [
          { attributes: { categoryName: 'UI' } },
          { attributes: { categoryName: 'Landing Page' } },
        ],
      },
    },
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);
  const [searchDesc, setSearchDesc] = useState('');
  console.log('render projects');
  console.log(projects);
  const onChangeFilter = (name: string) => {
    setActiveFilter((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleResetFilter = () => {
    setActiveFilter([]);
    setSearchDesc('');
  };

  const filtered = useMemo(() => {
    const byTags = projects.filter((project: any) => {
      if (activeFilter.length === 0) return true;
      const tags: string[] = project.attributes.categories.data.map(
        (e: any) => e.attributes.categoryName
      );
      return activeFilter.some((val) => tags.includes(val));
    });

    const q = searchDesc.trim().toLowerCase();
    if (!q) return byTags;

    return byTags.filter((p: any) => (p.attributes.content as string).toLowerCase().includes(q));
  }, [projects, activeFilter, searchDesc]);

  return (
    <div className={style.projectContainer}>
      <h1>Projects</h1>

      <div className={style.filterSectionContainer}>
        <div className={style.filterSection}>
          <div className={style.FilterSearchSection}>
            <input
              className={style.searchInputContainerTmp}
              onChange={(e) => setSearchDesc(e.target.value)}
              value={searchDesc}
              type="text"
              placeholder="Search description…"
            />
          </div>

          <div className={style.tagContainer}>
            <div className={style.subTagContainer}>
              {categories.map((category: any, i: number) => (
                <TagFilter
                  key={i}
                  data={category}
                  activeList={activeFilter}
                  onChangeFilter={onChangeFilter}
                />
              ))}
            </div>

            <button
              onClick={handleResetFilter}
              className={style.resetButtonContainer}
              aria-label="Reset filters"
            >
              <img
                width={50}
                height={50}
                src="/images/misc/refresh.svg"
                alt="refresh"
                loading="eager"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={style.projectItemsContainer}>
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map((data: any, i: number) => (
              <ProjectItem key={i} data={data} urls={{ back: 'back', provider: 'provider' }} />
            ))
          ) : (
            <div style={{ marginTop: 100 }}>Nothing found</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
