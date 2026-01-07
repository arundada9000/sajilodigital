import { searchEngine } from "../search/searchEngine";
import { toggleMute, isMuted } from "../../../lib/sound";

type Action =
  | { type: "navigate"; href: string }
  | { type: "call"; number: string }
  | { type: "email"; email: string }
  | { type: "action"; label: string; action: () => void };

export function handleVoiceCommand(transcript: string): Action | null {
  const cmd = transcript.toLowerCase().trim();

  // 1. SOUND CONTROL
  if (/mute|quiet|silence|turn off (sound|audio|voice)/i.test(cmd)) {
    if (!isMuted()) toggleMute();
    return { type: "action", label: "System Muted", action: () => { } }; // toggleMute handles state, but we return action for UI feedback
  }
  if (/unmute|speak|turn on (sound|audio|voice)/i.test(cmd)) {
    if (isMuted()) toggleMute();
    return { type: "action", label: "System Unmuted", action: () => { } };
  }

  // 2. CONTACT / COMMUNICATION
  if (/email (ceo|founder|arun)/i.test(cmd)) return { type: "email", email: "ceo@sajilodigital.com" };
  if (/call (ceo|founder)/i.test(cmd)) return { type: "call", number: "+9779800000000" };
  if (/recruitment|jobs|hiring|career/i.test(cmd)) return { type: "navigate", href: "/contact?subject=Career" };

  // 3. EXPLICIT NAVIGATION "Go to..."
  const navMatch = cmd.match(/go to (home|services|projects|blog|faq|team|about|contact)/i);
  if (navMatch) {
    const target = navMatch[1];
    switch (target) {
      case "home": return { type: "navigate", href: "/" };
      case "services": return { type: "navigate", href: "/services" };
      case "projects": return { type: "navigate", href: "/projects" };
      case "blog": return { type: "navigate", href: "/blog" };
      case "faq": return { type: "navigate", href: "/faq" };
      case "team": return { type: "navigate", href: "/about/team" };
      case "about": return { type: "navigate", href: "/about" };
      case "contact": return { type: "navigate", href: "/contact" };
    }
  }

  // 4. SEARCH INTENT "Search for..."
  const searchMatch = cmd.match(/search (for|about) (.+)/i);
  if (searchMatch && searchMatch[2]) {
    const query = searchMatch[2].trim();
    // Specialized searches
    if (query.includes("hosting") || query.includes("price") || query.includes("cost")) {
      return { type: "navigate", href: `/faq?q=${encodeURIComponent(query)}` };
    }
    // Fallback to general search engine best match
    const best = searchEngine.bestMatch(query);
    if (best) return { type: "navigate", href: best.href };
  }

  // 5. DIRECT QUESTIONS (FAQ/Team mapping)
  if (cmd.includes("who is the ceo")) return { type: "navigate", href: "/about/team?memberId=2" }; // Bal Gobind
  if (cmd.includes("cto") || cmd.includes("arun")) return { type: "navigate", href: "/about/team?memberId=3" };

  // 6. DEFAULT FUZZY MATCH
  // If no explicit command, try to match the whole phrase against the registry
  const best = searchEngine.bestMatch(cmd);
  if (best) {
    return { type: "navigate", href: best.href };
  }

  return null;
}
