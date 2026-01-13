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
      case "gallery": return { type: "navigate", href: "/gallery" };
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
  if (cmd.includes("ceo")  || cmd.includes("balgobind")  || cmd.includes("founder")  || cmd.includes("backend") || cmd.includes("bal")) return { type: "navigate", href: "/about/team?memberId=2" }; // Bal Gobind
  if (cmd.includes("cto") || cmd.includes("arun")  || cmd.includes("frontend")  || cmd.includes("pooja")  || cmd.includes("sama")) return { type: "navigate", href: "/about/team?memberId=3" };
  if (cmd.includes("qa") || cmd.includes("sunil") || cmd.includes("paudyal") || cmd.includes("18")  || cmd.includes("virat kohli")) return { type: "navigate", href: "/about/team?memberId=5" };
  if (cmd.includes("video editor") || cmd.includes("ashish") || cmd.includes("gm")  || cmd.includes("dante") ) return { type: "navigate", href: "/about/team?memberId=6" };
  if (cmd.includes("frontend") || cmd.includes("bijay") || cmd.includes("sexy") ) return { type: "navigate", href: "/about/team?memberId=4" };
  if (cmd.includes("chairperson") || cmd.includes("pramod") ) return { type: "navigate", href: "/about/team?memberId=1" };
  if (cmd.includes("graphic designer") || cmd.includes("puspanjali") || cmd.includes("ui/ux designer") ) return { type: "navigate", href: "/about/team?memberId=7" };


  // 6. DEFAULT FUZZY MATCH
  // If no explicit command, try to match the whole phrase against the registry
  const best = searchEngine.bestMatch(cmd);
  if (best) {
    return { type: "navigate", href: best.href };
  }

  return null;
}
