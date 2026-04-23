"use client";

import Link from "next/link";
import Image from "next/image";
import { menu } from "./utils/menu";
import { useState } from "react";

type LNavbarProps = {
    onOpen: () => void;
};

export default function Navbar({ onOpen }: LNavbarProps) {
    const [activeSection, setActiveSection] = useState<string>("#inicio");

    return (
        <div className="bg-white absolute left-1/2 -translate-x-1/2 flex items-center gap-10 px-6 py-2">

            <ul className="navbar-menu hidden md:flex gap-10 text-xl p-4">
                {menu.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`block px-0 py-2 transition-all duration-200 ${isActive
                                        ? "text-dev-black/95 font-bold"
                                        : "text-dev-gray/90 hover:text-gray-800"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="flex items-center gap-4 border-2 border-red">
                <a
                    href="https://www.linkedin.com/in/eduardohcm/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src="/icons/linkedin_icon_black.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="h-6 w-auto cursor-pointer"
                    />
                </a>

                <a
                    href="https://github.com/MachadoEduardo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src="/icons/github_icon_black.svg"
                        alt="Github"
                        width={24}
                        height={24}
                        className="h-6 w-auto cursor-pointer"
                    />
                </a>
            </div>
        </div>
    );
}