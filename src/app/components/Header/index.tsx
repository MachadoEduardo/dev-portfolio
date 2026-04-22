"use client";

import { useState } from "react";
import Navbar from "@/src/app/components/Navigation/Navbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Navbar onOpen={() => setOpen(true)} />
    </header>
  );
}