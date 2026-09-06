"use client";

// components/theme-toggle.tsx
//
// Manual light/dark toggle. This project has no next-themes dependency —
// globals.css defines its palette via a plain `.dark` class on <html>
// (`@custom-variant dark (&:is(.dark *))`), so this toggles that class
// directly and remembers the choice in localStorage. Falls back to the
// system preference (prefers-color-scheme) the first time a visitor arrives
// with nothing stored yet.

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "ridewise-theme";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  // Start undefined so we render nothing until mounted — avoids a
  // light/dark mismatch flash between server and client render.
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back to system.
    }
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : !!prefersDark;
    setIsDark(dark);
    applyTheme(dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Non-fatal — theme just won't persist across reloads this session.
    }
  }

  if (isDark === undefined) {
    // Reserve the button's footprint so the header doesn't shift on mount.
    return <div className="h-8 w-8" aria-hidden="true" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
