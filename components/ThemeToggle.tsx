"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return mounted ? (
    <div className="top-4 left-4 absolute">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </Button>
    </div>
  ) : null;
}
