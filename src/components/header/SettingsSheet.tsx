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
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-6"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full md:max-w-lg bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-t-[32px] md:rounded-[32px] shadow-[0_0_80px_rgba(0,0,0,0.8)] p-8 overflow-hidden z-[210]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase italic">Preferences</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors font-bold"
          >
            Close
          </button>
        </div>

        <div className="space-y-8">
          {/* Theme */}
          <div>
            <label className="block text-[10px] tracking-[0.3em] font-bold text-white/20 uppercase mb-4">
              Appearance
            </label>
            <div className="grid grid-cols-3 gap-3">
              {["light", "dark", "system"].map((t) => (
                <button
                  key={t}
                  onClick={() => setPref("theme", t as any)}
                  className={`px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${prefs.theme === t
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-white/60 border-white/5 hover:border-white/20"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Accent color */}
          <div>
            <label className="block text-[10px] tracking-[0.3em] font-bold text-white/20 uppercase mb-4">
              Accent Tone
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { from: "#2563eb", to: "#7c3aed", name: "Nebula" },
                { from: "#16a34a", to: "#22c55e", name: "Forest" },
                { from: "#ea580c", to: "#d946ef", name: "Sunset" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setPref("accentFrom", c.from);
                    setPref("accentTo", c.to);
                  }}
                  className="px-4 py-3 rounded-xl border border-white/5 flex items-center justify-between group overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 relative z-10">{c.name}</span>
                  <div className="w-2 h-2 rounded-full relative z-10" style={{ backgroundColor: c.from }} />
                </button>
              ))}
            </div>
          </div>

          {/* Font size */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] tracking-[0.3em] font-bold text-white/20 uppercase">
                Content Scale
              </label>
              <span className="text-[10px] font-mono text-white/40">{prefs.baseFont}px</span>
            </div>
            <input
              title="Font Size"
              type="range"
              min={14}
              max={18}
              value={prefs.baseFont}
              onChange={(e) => setPref("baseFont", Number(e.target.value))}
              className="w-full h-1 bg-white/5 rounded-full appearance-none accent-blue-500 cursor-pointer"
            />
          </div>

          {/* Reduced motion */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">Reduced Motion</span>
            <input
              id="reducedMotion"
              type="checkbox"
              checked={prefs.reducedMotion}
              onChange={(e) => setPref("reducedMotion", e.target.checked)}
              className="w-4 h-4 rounded border-white/10 bg-black accent-blue-500"
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={reset}
              className="flex-1 py-4 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white hover:bg-white/5 transition-all"
            >
              Reset
            </button>
            <button
              onClick={() => onOpenChange(false)}
              className="flex-[2] py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-[0.3em] hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
