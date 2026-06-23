"use client";

import Link from "next/link";
import Image from "next/image";
import { menu } from "./utils/menu";
import { useActiveSection } from "./hooks/useActiveSection";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function LSidebar({ open, onClose }: MobileMenuProps) {
  const activeSection = useActiveSection(menu, {
    rootMargin: "0px 0px -45% 0px",
    threshold: 0.1,
  });

  return (
    <>
      <div
        className={`dev-sidebar-overlay ${open ? "is-open" : ""}`}
        onClick={onClose}
      />

      <aside
        className={`dev-sidebar ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <button type="button" onClick={onClose} tabIndex={open ? 0 : -1}>
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
                  tabIndex={open ? 0 : -1}
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
