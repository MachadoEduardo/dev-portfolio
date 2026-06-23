"use client";

import Link from "next/link";
import { menu } from "./utils/menu";
import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { useActiveSection } from "./hooks/useActiveSection";

type LNavbarProps = {
  onOpen: () => void;
};

export default function LNavbar({ onOpen }: LNavbarProps) {
  const { scrollYProgress, scrollY } = useScroll();

  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const activeSection = useActiveSection(menu);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 24);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className="dev-navbar"
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255,255,255,0.9)"
          : "rgba(255,255,255,1)",
        boxShadow: isScrolled
          ? "0 8px 30px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="container">
        <button type="button" onClick={onOpen} className="md:hidden">
          <Image
            src="/icons/menu_icon_black.svg"
            alt="Abrir menu lateral"
            width={0}
            height={0}
            className="h-7 w-auto"
          />
        </button>

        <div className="dev-logo">
          <Link href="/">
            <Image
              src="/icon.svg"
              alt="Edu, The Dev"
              width={0}
              height={0}
              className="h-9 4xl:h-10 w-auto"
            />
          </Link>
        </div>

        <ul className="navbar-menu hidden md:flex gap-6 text-sm">
          {menu.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
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

        <div className="flex justify-self-end gap-4">
          <a
            href="https://www.linkedin.com/in/eduardohcm/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/linkedin_icon_black.svg"
              alt="LinkedIn"
              width={0}
              height={0}
              className="h-5.5 4xl:h-6 w-auto cursor-pointer"
            />
          </a>

          <a
            href="https://github.com/MachadoEduardo"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/github_icon_black.svg"
              alt="GitHub"
              width={0}
              height={0}
              className="h-5.5 4xl:h-6 w-auto cursor-pointer"
            />
          </a>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progressScaleX }}
        className="scroll-progress origin-left"
      />
    </motion.nav>
  );
}
