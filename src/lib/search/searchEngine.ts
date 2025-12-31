// lib/search/searchEngine.ts
import { searchRegistry, Entry } from "../../data/searchEngineData";

/* ---------------- helpers ---------------- */

function normalize(s: string) {
  return s.toLowerCase().trim();
}

function tokenize(s: string) {
  return normalize(s).split(/\s+/);
}

/* --------- simple typo tolerance ---------- */
// lightweight Levenshtein (good enough for small data)
function levenshtein(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
    }
  }

  return dp[a.length][b.length];
}

/* ---------------- weights ---------------- */

const TYPE_WEIGHT: Record<Entry["type"], number> = {
  page: 5,
  section: 4,
  faq: 3,
  blog: 2,
  team: 1,
};

/* ---------------- scoring ---------------- */

function score(query: string, entry: Entry) {
  const q = normalize(query);
  const tokens = tokenize(q);
  const fields = [entry.title, ...(entry.keywords ?? [])].map(normalize);

  let total = TYPE_WEIGHT[entry.type] ?? 0;

  for (const field of fields) {
    if (field === q) total += 6;
    else if (field.startsWith(q)) total += 4;
    else if (field.includes(q)) total += 3;

    total += tokens.filter((t) => field.includes(t)).length;

    // typo tolerance (small distance only)
    if (levenshtein(field, q) <= 2) {
      total += 2;
    }
  }

  return total;
}

/* ---------------- engine ---------------- */
export const searchEngine = {
  suggest(query: string): Entry[] {
    if (!query.trim()) return [];

    return searchRegistry
      .map((entry) => ({ entry, score: score(query, entry) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.entry);
  },

  bestMatch(query: string): Entry | null {
    return this.suggest(query)[0] ?? null;
  },
};
