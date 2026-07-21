'use client';

import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Add the JS-active class so the opacity-0 styles kick in
    const root = document.documentElement;
    root.classList.add('js-anim');

    const init = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('.opacity-0-init')
      );

      if (elements.length === 0) return;

      if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('in-view'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));

      // Safety: force-show anything still hidden after 10s
      const fallback = setTimeout(() => {
        elements.forEach((el) => {
          if (!el.classList.contains('in-view')) {
            el.classList.add('in-view');
          }
        });
      }, 10000);

      return () => {
        clearTimeout(fallback);
        observer.disconnect();
      };
    };

    // Run after hydration + a tick so all client components are mounted
    const timer = setTimeout(init, 200);

    return () => {
      clearTimeout(timer);
      root.classList.remove('js-anim');
    };
  }, []);
}
