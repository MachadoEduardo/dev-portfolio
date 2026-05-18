"use client";

import { useState } from "react";
import Navbar from "@/src/components/Navigation/Navbar";
import Sidebar from "@/src/components/Navigation/Sidebar"; 

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Navbar onOpen={() => setOpen(true)} />
        <Sidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}