"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { searchEngine } from "../../lib/search/searchEngine";

function highlight(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "ig");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="text-blue-400 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function SearchInput({ autoFocus = false }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const grouped = results.reduce<Record<string, any[]>>((acc, r) => {
    acc[r.type] = acc[r.type] || [];
    acc[r.type].push(r);
    return acc;
  }, {});

  const flatResults = Object.values(grouped).flat();

  const onChange = (value: string) => {
    setQuery(value);
    const res = searchEngine.suggest(value);
    setResults(res);
    setActiveIndex(0); // 🎯 auto-select best match
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const item = flatResults[activeIndex];
    if (item) window.location.href = item.href;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!flatResults.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % flatResults.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? flatResults.length - 1 : i - 1));
    }

    if (e.key === "Escape") {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="relative group">
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search Archive..."
          className="w-full lg:w-[320px] px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/20 outline-none focus:border-white/30 transition-all text-sm"
        />
        <button title="Search" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-500 transition-colors">
          <Search className="w-4 h-4" />
        </button>
      </form>

      {results.length > 0 && (
        <div className="absolute mt-3 w-full rounded-2xl border border-white/10 bg-black/80 backdrop-blur-3xl shadow-2xl overflow-hidden z-[130]">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="border-b last:border-b-0 border-white/5">
              <div className="px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                {type}
              </div>
              {items.map((r) => {
                const index = flatResults.indexOf(r);
                return (
                  <a
                    key={r.href}
                    href={r.href}
                    className={`flex justify-between items-center px-5 py-3 transition-colors ${index === activeIndex ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="text-sm text-white/70">{highlight(r.title, query)}</span>
                    <span className="text-[10px] text-white/20 uppercase tracking-tighter">{r.type}</span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
