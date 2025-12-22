"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { searchEngine } from "../../lib/search/searchEngine";

function highlight(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "ig");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 rounded px-0.5">
        {part}
      </mark>
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
      <form onSubmit={onSubmit} className="relative">
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search pages, services, FAQs…"
          className="w-[240px] lg:w-[320px] px-4 py-2 rounded-full border bg-gray-100"
        />
        <button title="Search" className="absolute right-2 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5" />
        </button>
      </form>

      {results.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl border bg-white shadow-xl max-h-72 overflow-auto">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              <div className="px-4 py-1 text-xs font-semibold uppercase text-gray-400">
                {type}
              </div>
              {items.map((r) => {
                const index = flatResults.indexOf(r);
                return (
                  <a
                    key={r.href}
                    href={r.href}
                    className={`flex justify-between px-4 py-2 ${
                      index === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span>{highlight(r.title, query)}</span>
                    <span className="text-xs text-gray-400">{r.type}</span>
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
