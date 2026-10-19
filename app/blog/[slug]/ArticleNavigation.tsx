'use client';

import { useEffect, useState } from 'react';

export type ArticleNavigationItem = {
  id: string;
  label: string;
};

function NavigationLinks({ items, activeId, onNavigate }: {
  items: ArticleNavigationItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <ol className="article-navigation-list">
      {items.map((item) => (
        <li key={item.id}>
          <a
            className={activeId === item.id ? 'is-active' : undefined}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'location' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function ArticleNavigation({ items }: { items: ArticleNavigationItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    const headings = items.flatMap((item) => {
      const heading = document.getElementById(item.id);
      return heading ? [heading] : [];
    });
    if (!headings.length) return;

    const updateActiveHeading = () => {
      const headerOffset = 112;
      const current = headings.reduce<HTMLElement | null>((active, heading) => {
        return heading.getBoundingClientRect().top <= headerOffset ? heading : active;
      }, null);
      setActiveId(current?.id || headings[0].id);
    };

    const observer = new IntersectionObserver(updateActiveHeading, {
      rootMargin: '-112px 0px -65% 0px',
      threshold: [0, 1],
    });
    headings.forEach((heading) => observer.observe(heading));
    updateActiveHeading();

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="article-navigation">
      <aside className="article-sidebar" aria-label="Article sections">
        <strong>On this page</strong>
        <NavigationLinks items={items} activeId={activeId} onNavigate={setActiveId} />
      </aside>

      <details className="article-navigation-mobile">
        <summary>On this page</summary>
        <nav aria-label="Article sections on mobile">
          <NavigationLinks items={items} activeId={activeId} onNavigate={setActiveId} />
        </nav>
      </details>
    </div>
  );
}
