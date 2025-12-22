// components/header/SettingsSheet.tsx
"use client";

import { usePreferences } from "../../lib/preferences/usePreferences";

export default function SettingsSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { prefs, setPref, reset } = usePreferences();

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Settings"
      className="fixed inset-0 z-60 flex items-end md:items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full md:max-w-lg bg-white rounded-t-2xl md:rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>

        <div className="space-y-6">
          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPref("theme", "light")}
                className={`px-3 py-2 rounded border ${
                  prefs.theme === "light"
                    ? "border-blue-600"
                    : "border-gray-300"
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setPref("theme", "dark")}
                className={`px-3 py-2 rounded border ${
                  prefs.theme === "dark" ? "border-blue-600" : "border-gray-300"
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => setPref("theme", "system")}
                className={`px-3 py-2 rounded border ${
                  prefs.theme === "system"
                    ? "border-blue-600"
                    : "border-gray-300"
                }`}
              >
                System
              </button>
            </div>
          </div>

          {/* Accent color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Accent color
            </label>
            <div className="flex gap-2">
              {[
                { from: "#2563eb", to: "#7c3aed", name: "Blue/Purple" },
                { from: "#16a34a", to: "#22c55e", name: "Green" },
                { from: "#ea580c", to: "#d946ef", name: "Orange/Pink" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setPref("accentFrom", c.from);
                    setPref("accentTo", c.to);
                  }}
                  className="px-3 py-2 rounded border border-gray-300"
                  style={{
                    background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                    color: "white",
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Font size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Base font size
            </label>
            <input
              title="Font Size"
              type="range"
              min={14}
              max={18}
              value={prefs.baseFont}
              onChange={(e) => setPref("baseFont", Number(e.target.value))}
              className="w-full"
            />
            <div className="mt-1 text-sm text-gray-600">{prefs.baseFont}px</div>
          </div>

          {/* Reduced motion */}
          <div className="flex items-center gap-2">
            <input
              id="reducedMotion"
              type="checkbox"
              checked={prefs.reducedMotion}
              onChange={(e) => setPref("reducedMotion", e.target.checked)}
            />
            <label htmlFor="reducedMotion" className="text-sm text-gray-700">
              Reduce animations
            </label>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={reset}
              className="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              onClick={() => onOpenChange(false)}
              className="px-3 py-2 rounded bg-[var(--accent-from)] text-white hover:opacity-90"
              style={{ backgroundColor: "var(--accent-from)" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
