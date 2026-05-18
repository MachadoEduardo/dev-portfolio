"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menu } from "./utils/menu";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function LSidebar({ open, onClose }: MobileMenuProps) {
  const [rendered, setRendered] = useState(false);
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#inicio");

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout> | undefined;
    let closeTimer: ReturnType<typeof setTimeout> | undefined;

    if (open) {
      setRendered(true);

      openTimer = setTimeout(() => {
        setActive(true);
      }, 10);
    } else {
      setActive(false);

      closeTimer = setTimeout(() => {
        setRendered(false);
      }, 300);
    }

    return () => {
      if (openTimer) {
        clearTimeout(openTimer);
      }

      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [open]);

  useEffect(() => {
    const sectionIds = menu
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"));

    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aTop = Math.abs(a.boundingClientRect.top);
            const bTop = Math.abs(b.boundingClientRect.top);

            return aTop - bTop;
          });

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -45% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!rendered) {
    return null;
  }

  return (
    <>
      <div
        className={`dev-sidebar-overlay ${active ? "is-open" : ""}`}
        onClick={onClose}
      />

      <aside className={`dev-sidebar ${active ? "is-open" : ""}`}>
        <button type="button" onClick={onClose}>
          <Image
            src="/icons/menu_icon_black.svg"
            alt="Fechar menu lateral"
            width={0}
            height={0}
            className="h-7 w-auto"
          />
        </button>

        <ul>
          {menu.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block px-0 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-dev-black/95 font-semibold"
                      : "text-dev-gray/90 hover:text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
