// lib/preferences/usePreferences.ts
"use client";

import { useEffect, useState } from "react";

type Prefs = {
  theme: "light" | "dark" | "system";
  accentFrom: string;
  accentTo: string;
  baseFont: number;
  reducedMotion: boolean;
};

const defaultPrefs: Prefs = {
  theme: "system",
  accentFrom: "#2563eb",
  accentTo: "#7c3aed",
  baseFont: 16,
  reducedMotion: false,
};

export function usePreferences() {
  const [prefs, setPrefs] = useState<Prefs>(() => {
    if (typeof window === "undefined") return defaultPrefs;
    try {
      const raw = localStorage.getItem("prefs");
      return raw ? { ...defaultPrefs, ...JSON.parse(raw) } : defaultPrefs;
    } catch {
      return defaultPrefs;
    }
  });

  useEffect(() => {
    // Persist
    localStorage.setItem("prefs", JSON.stringify(prefs));
    // Apply CSS vars and classes
    const root = document.documentElement;
    root.style.setProperty("--accent-from", prefs.accentFrom);
    root.style.setProperty("--accent-to", prefs.accentTo);
    root.style.setProperty("--base-font", `${prefs.baseFont}px`);

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const themeClass =
      prefs.theme === "system"
        ? prefersDark
          ? "dark"
          : ""
        : prefs.theme === "dark"
        ? "dark"
        : "";
    root.classList.toggle("dark", themeClass === "dark");

    root.style.setProperty("--motion-scale", prefs.reducedMotion ? "0" : "1");
  }, [prefs]);

  const setPref = <K extends keyof Prefs>(key: K, value: Prefs[K]) =>
    setPrefs((p) => ({ ...p, [key]: value }));

  const reset = () => setPrefs(defaultPrefs);

  return { prefs, setPref, reset };
}
