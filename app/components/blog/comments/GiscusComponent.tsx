import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const GiscusComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', 'BogdanDraghia/personal-blog-v2');
    script.setAttribute('data-repo-id', 'R_kgDOP6nEfA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOP6nEfM4Cwzas');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');

    const comments = ref.current;
    if (comments) {
      comments.appendChild(script);
    }

    return () => {
      if (comments) {
        comments.innerHTML = '';
      }
    };
  }, [pathname]);

  return <div ref={ref}></div>;
};

export default GiscusComponent;
