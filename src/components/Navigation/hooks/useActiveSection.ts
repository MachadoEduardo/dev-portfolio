"use client";

import { useEffect, useState } from "react";

type MenuItem = {
  href: string;
};

type UseActiveSectionOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

const DEFAULT_ROOT_MARGIN = "-20% 0px -55% 0px";
const DEFAULT_THRESHOLD = [0.2, 0.35, 0.5, 0.65];

export function useActiveSection(
  menuItems: MenuItem[],
  {
    rootMargin = DEFAULT_ROOT_MARGIN,
    threshold = DEFAULT_THRESHOLD,
  }: UseActiveSectionOptions = {},
) {
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const sections = menuItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [menuItems, rootMargin, threshold]);

  return activeSection;
}
