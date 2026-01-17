"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Layers,
  Layout,
  FileText,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { searchRegistry } from "../../../data/searchEngineData";
import Grain from "../../../components/ui/Grain";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState(searchRegistry);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      if (!query.trim()) {
        setResults(searchRegistry);
      } else {
        const filtered = searchRegistry.filter((item) => {
          const searchContent =
            `${item.title} ${item.keywords?.join(" ") || ""}`.toLowerCase();
          return searchContent.includes(query.toLowerCase());
        });
        setResults(filtered);
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "page":
        return <Layout className="w-4 h-4" />;
      case "section":
        return <Layers className="w-4 h-4" />;
      case "blog":
        return <FileText className="w-4 h-4" />;
      case "team":
        return <Users className="w-4 h-4" />;
      case "faq":
        return <HelpCircle className="w-4 h-4" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

  return (
    <div className="container-custom py-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4"
          >
            Digital <span className="text-blue-500">Sajilo</span> Search
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 font-mono text-sm uppercase tracking-widest"
          >
            {isSearching
              ? "Decrypting database..."
              : `Found ${results.length} nodes associated with "${query || "all"}"`}
          </motion.p>
        </div>

        {/* Results Grid */}
        <div className="grid gap-4">
          {results.length > 0 ? (
            results.map((result, index) => (
              <motion.div
                key={`${result.href}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={result.href}
                  className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      {getTypeIcon(result.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {result.title}
                      </h3>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white/10 rounded text-white/40">
                          {result.type}
                        </span>
                        {result.keywords?.slice(0, 3).map((kw, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono uppercase tracking-wider text-blue-500/60"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/5 backdrop-blur-md"
            >
              <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Null Result Detected
              </h3>
              <p className="text-white/40 font-mono">
                No data nodes matching your query parameters were found in the
                registry.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <Grain />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center font-mono text-blue-500 uppercase tracking-[0.4em] animate-pulse">
            Initializing Search Engine...
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
