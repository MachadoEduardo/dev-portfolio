"use client";

import Link from "next/link";
import { menu } from "./utils/menu";
import { useState } from "react";

type LNavbarProps = {
    onOpen: () => void;
};

export default function Navbar({ onOpen }: LNavbarProps) {
    const [activeSection, setActiveSection] = useState<string>("#inicio");

    return (
        <div className="bg-white absolute left-1/2 -translate-x-1/2 ">
            <ul className="navbar-menu hidden md:flex gap-6 text-xl">
                {menu.map((item) => {
                    const isActive = activeSection === item.href;

                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`block px-0 py-2 transition-all duration-200 ${isActive
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
        </div>
    );
}
