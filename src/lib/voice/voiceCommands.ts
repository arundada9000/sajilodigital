import { searchEngine } from "../search/searchEngine";

type Action =
  | { type: "navigate"; href: string }
  | { type: "call"; number: string }
  | { type: "email"; email: string };

export function handleVoiceCommand(transcript: string): Action | null {
  const cmd = transcript.toLowerCase().trim();

  // ----- predefined fake-AI commands -----
  if (cmd.includes("contact ceo") || cmd.includes("email ceo")) {
    return { type: "email", email: "ceo@domain.com" };
  }

  if (cmd.includes("call ceo")) {
    return { type: "call", number: "+1234567890" };
  }

  // ----- simple navigation commands -----
  const navMap: Record<string, string> = {
    home: "/",
    contact: "/contact",
    services: "/services",
    projects: "/projects",
    pricing: "/pricing",
    blog: "/blog",
    faq: "/faq",
  };

  for (const key in navMap) {
    if (cmd.includes(key)) {
      return { type: "navigate", href: navMap[key] };
    }
  }

  // ----- fallback to search engine -----
  const best = searchEngine.bestMatch(cmd);
  if (best) {
    return { type: "navigate", href: best.href };
  }

  return null; // unknown
}
