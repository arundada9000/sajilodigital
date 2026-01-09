"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Real programmers count from 0.",
  "Hardware: The part of a computer that you can kick.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "There are 10 types of people: those who understand binary and those who don't.",
  "A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He returns with 12 loaves of bread.",
  "Why did the developer go broke? Because he used up all his cache.",
  "What's a programmer's favorite hangout? The Foo Bar.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
  "How do you comfort a JavaScript bug? You console it.",
  "What do you call a programmer from Finland? Nerdic.",
  "Why did the function break up with the variable? It had too many arguments.",
  "A SQL statement walks into a bar and sees two tables. It approaches, and asks 'may I join you?'",
  "What's the object-oriented way to become wealthy? Inheritance.",
  "Why do Python programmers have low self-esteem? They're constantly comparing self to others.",
  "How many programmers does it take to screw in a lightbulb? None, that's a hardware issue.",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
  "What did the router say to the doctor? It hurts when IP.",
  "Why do programmers hate nature? It has too many bugs.",
  "What's a hacker's favorite season? Phishing season.",
  "Why did the database administrator leave his wife? She had one-to-many relationships.",
  "How do you generate a random string? Put a Windows user in front of Vim.",
  "What do you call 8 hobbits? A hobbyte.",
  "Why did the developer quit his job? He didn't get arrays.",
  "What's the best thing about a Boolean? Even if you're wrong, you're only off by a bit.",
  "Why do programmers prefer iOS development? Because the Swift.",
  "What do you call a programmer who doesn't comment their code? Unemployed.",
  "Why did the programmer die in the shower? The shampoo bottle said: Lather, Rinse, Repeat.",
];

const QUOTES = [
  "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Make it simple, but significant. - Don Draper",
  "Digital design is like painting, except the paint never dries. - Neville Brody",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "In order to be irreplaceable, one must always be different. - Coco Chanel",
  "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
  "Knowledge is power. - Francis Bacon",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
  "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
  "Ruby is rubbish! PHP is phpantastic! - Nikita Popov",
  "Code never lies, comments sometimes do. - Ron Jeffries",
  "Simplicity is prerequisite for reliability. - Edsger W. Dijkstra",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
];

const MOTIVATIONAL = [
  "You're doing amazing! Keep pushing forward.",
  "Every line of code is a step towards mastery.",
  "Debugging is just you being a detective. You got this!",
  "The best error message is the one that never shows up.",
  "Your future self will thank you for writing clean code today.",
  "Believe in yourself. You're capable of incredible things.",
  "Progress, not perfection. Keep building!",
  "The code you write today shapes the world of tomorrow.",
  "Stay curious. Stay hungry. Stay coding.",
  "You're not just a developer. You're a creator.",
  "Embrace the bugs. They make you stronger.",
  "Dream big. Code bigger.",
  "Your potential is limitless. Keep learning.",
  "The only way to do great work is to love what you do.",
  "Success is the sum of small efforts repeated day in and day out.",
];

const PAGES = [
  "home",
  "about",
  "blog",
  "contact",
  "faq",
  "gallery",
  "pricing",
  "projects",
  "services",
  "testimonials",
  "status",
];

// Team Data
const TEAM_MEMBERS = [
  { id: 1, name: "Pramod Tharu", role: "Chairperson" },
  { id: 2, name: "Bal Gobind Chaudhary", role: "CEO / Founder" },
  { id: 3, name: "Arun Neupane", role: "Chief Technology Officer" },
  { id: 4, name: "Bijay Kumar Chaudhary", role: "Frontend Developer" },
  { id: 5, name: "Sunil Paudyal", role: "QA Tester & Frontend Developer" },
  { id: 6, name: "Ashish G.M", role: "Frontend Developer/Video Editor" },
  { id: 7, name: "Puspanjali Gurung", role: "UI/UX Designer" },
];

const COMMANDS: Record<string, string | (() => string)> = {
  help: "Known protocols: ls, cd, status, hack, about, whoami, social, matrix, date, echo, system, logs, joke, quote, motivate, neofetch, clear, cls, weather, team, ceo, cto, chairperson, founder, designer, facebook, fb, instagram, insta, github, linkedin, youtube, exit, print, printf",
  about:
    "Sajilo Digital: A premium digital architecture firm based in Nepal. We specialize in high-performance Web Ecosystems, Neural UX/UI, and Algorithmic SEO.",

  // Team Member Lookups
  ceo: () => {
    const member = TEAM_MEMBERS.find((m) =>
      m.role.toLowerCase().includes("ceo")
    );
    return member
      ? `${member.role}: ${member.name}`
      : "CEO information not found.";
  },
  founder: () => {
    const member = TEAM_MEMBERS.find((m) =>
      m.role.toLowerCase().includes("founder")
    );
    return member
      ? `${member.role}: ${member.name}`
      : "Founder information not found.";
  },
  cto: () => {
    const member = TEAM_MEMBERS.find(
      (m) =>
        m.role.toLowerCase().includes("cto") ||
        m.role.toLowerCase().includes("technology officer")
    );
    return member
      ? `${member.role}: ${member.name}`
      : "CTO information not found.";
  },
  chairperson: () => {
    const member = TEAM_MEMBERS.find((m) =>
      m.role.toLowerCase().includes("chairperson")
    );
    return member
      ? `${member.role}: ${member.name}`
      : "Chairperson information not found.";
  },
  designer: () => {
    const member = TEAM_MEMBERS.find((m) =>
      m.role.toLowerCase().includes("designer")
    );
    return member
      ? `${member.role}: ${member.name}`
      : "Designer information not found.";
  },

  team: () => {
    return (
      "Team Members:\n" +
      TEAM_MEMBERS.map((m) => `  • ${m.name} - ${m.role}`).join("\n")
    );
  },

  tech: "Primary Stack: Next.js, React, TypeScript, GSAP, Framer Motion, PostgreSQL, AWS, Vercel, Nodejs, express, mongodb.",
  location:
    "SajiloDigital: Horizon Chowk, Butwal-11, Nepal. Lat: 27.7006, Long: 83.4484.",
  pricing:
    "Modular Architecture: Starting from 500$ (Standard) to 2000$+ (Enterprise). Type 'goto pricing' for details.",

  status: () => `SYSTEM_CORE: v3.1.0 [OPTIMIZED]
> Neural_Link: STABLE
> Uptime: ${Math.floor(Math.random() * 99) + 1}d ${Math.floor(
    Math.random() * 23
  )}h
> Creativity: 100% (Surge Detected)
> Coffee: [CRITICAL] Recharge immediately.`,

  whoami:
    "Subject: Honored Guest. Identity: Visionary. Access: Level 1 (Read/Interact).",

  social:
    "Connectivity:\n> LinkedIn: linkedin.com/company/sajilodigital\n> Facebook: fb.com/sajilodigital\n> Github: github.com/sajilodigital\n> Instagram: instagram.com/sajilodigital",

  // Social Media Shortcuts
  facebook:
    "Opening Facebook... https://www.facebook.com/profile.php?id=61579846778258",
  fb: "Opening Facebook... https://www.facebook.com/profile.php?id=61579846778258",
  instagram: "Opening Instagram... https://instagram.com/sajilo_digital",
  insta: "Opening Instagram... https://instagram.com/sajilo_digital",
  github: "Opening GitHub... https://github.com/sajhilodigital",
  linkedin: "Opening LinkedIn... https://linkedin.com/company/sajilo-digital",
  youtube: "Opening YouTube... https://youtube.com/@sajilo_digital",
  yt: "Opening YouTube... https://youtube.com/@sajilo_digital",

  date: () =>
    `Terminal Time: ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    })} (NST)`,

  weather: () => {
    const conditions = [
      "Sunny ☀️",
      "Cloudy ☁️",
      "Rainy 🌧️",
      "Partly Cloudy ⛅",
      "Clear 🌙",
    ];
    const temp = Math.floor(Math.random() * 15) + 15; // 15-30°C
    return `Weather in Butwal, Nepal:\n> Condition: ${
      conditions[Math.floor(Math.random() * conditions.length)]
    }\n> Temperature: ${temp}°C\n> Humidity: ${
      Math.floor(Math.random() * 40) + 40
    }%\n> Wind: ${Math.floor(Math.random() * 15) + 5} km/h`;
  },

  coffee:
    "Error 418: I'm a teapot. No, wait, I'm a server. Please insert Caffeine-Injection-System.",

  system: () => `[SYSTEM DIAGNOSTICS]
CPU: Liquid-Cooled Neural Core v9.2
RAM: 128TB Holographic Buffer [92% FREE]
DISK: Quantum Lattice Storage [STABLE]
NET: 50Gbps Fiber-Link Path 1 [CONNECTED]`,

  logs: () => `[LOG_STREAM]
${new Date().toISOString()} - [INFO] Indexing neural nodes...
${new Date().toISOString()} - [WARN] Caffeine levels low in sector 7.
${new Date().toISOString()} - [INFO] Re-rendering reality in 4K.
${new Date().toISOString()} - [INFO] Optimizing UX for subconscious flow.`,

  joke: () => JOKES[Math.floor(Math.random() * JOKES.length)],
  quote: () => QUOTES[Math.floor(Math.random() * QUOTES.length)],
  motivate: () => MOTIVATIONAL[Math.floor(Math.random() * MOTIVATIONAL.length)],

  neofetch: () => `
   ______      _ _ _
  / ____/___ _(_) (_)___
 / /   / __ \`/ / / / __ \\
/ /___/ /_/ / / / / /_/ /
\\____/\\__,_/_/_/_/\\____/ core@sajilo
------------------------
OS: SajiloOS v3.1.0 x86_64
Host: Nexus Architecture v1
Kernel: 6.1.0-SAJILO-PROD
Uptime: 4 days, 20 hours
Packages: 2024 (dpkg)
Shell: sajilo-sh 1.0
Resolution: 7680x4320
UI: Neural-UX Custom
CPU: Sajilo Neural Core (16) @ 5.000GHz
GPU: NVIDIA Quantum RTX 9000
Memory: 32768MiB / 131072MiB
`,

  sajilo: `
   _____         _ _ _      
  |   __|___ ___|_| | |_ _  
  |__   | .'| . | | | | . | 
  |_____|__,|___|_|_|_|___| 
                            
  SAJILODIGITAL CORE v3.1.0 (PROTOTYPE)
`,

  hack: "Vulnerability Scan: 0 found.\nFirewall: UNBREAKABLE.\nMainframe: ACCESS DENIED.\nHint: Try 'matrix' instead.",
  ls: `Indexed Directories: \n${PAGES.map((p) => `  /${p}`).join("\n")}`,
  sudo: "User not in the sudoers file. This incident will be reported to the CEO.",
  matrix: "Green-Rain sub-routine: [INITIALIZED]",
  ping: () =>
    `64 bytes from digital_nexus: icmp_seq=1 ttl=64 time=${(
      Math.random() * 10 +
      5
    ).toFixed(2)}ms`,
};

const MatrixRain = ({ color }: { color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@%&*".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color; // Dynamic Color
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
    />
  );
};

export default function NexusTerminal({
  isOverlay = false,
}: {
  isOverlay?: boolean;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "SajiloDigital Core [Version 1.0.0]",
    "Type 'help' to see active protocols.",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isWarping, setIsWarping] = useState(false);
  const [isMatrix, setIsMatrix] = useState(false);
  const [matrixColor, setMatrixColor] = useState("#06b6d4"); // Cyan default
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus input when terminal opens (especially for Ctrl+K)
  useEffect(() => {
    if (isOverlay && inputRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOverlay]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.trim().split(" ");
      const cmd = parts[0].toLowerCase();
      const arg = parts[1]?.toLowerCase();

      if (parts.length === 1 && cmd) {
        // Autocomplete commands
        const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(cmd));
        if (matches.length === 1) {
          setInput(matches[0]);
        }
      } else if (
        parts.length === 2 &&
        (cmd === "cd" || cmd === "goto" || cmd === "move")
      ) {
        // Autocomplete pages
        const matches = PAGES.filter((p) => p.startsWith(arg));
        if (matches.length === 1) {
          setInput(`${cmd} ${matches[0]}`);
        }
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add to command history
    setCommandHistory((prev) =>
      [trimmedInput, ...prev.filter((c) => c !== trimmedInput)].slice(0, 50)
    );
    setHistoryIndex(-1);

    const parts = trimmedInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);
    } else if (cmd === "hack") {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000);
      setHistory([...history, `> ${input}`, COMMANDS.hack as string]);
    } else if (cmd === "echo" || cmd === "print" || cmd === "printf") {
      const text = parts.slice(1).join(" ");
      setHistory([...history, `> ${input}`, text || " "]);
    } else if (cmd === "matrix") {
      if (arg === "-color" || arg === "--color") {
        const colorCode = parts[2];
        if (colorCode) {
          setMatrixColor(colorCode);
          setHistory([
            ...history,
            `> ${input}`,
            `Matrix color sub-routine updated: ${colorCode}`,
          ]);
        } else {
          setHistory([
            ...history,
            `> ${input}`,
            `Error: No color specified. Usage: matrix -color <hex/name>`,
          ]);
        }
      } else {
        setIsMatrix(!isMatrix);
        setHistory([
          ...history,
          `> ${input}`,
          !isMatrix
            ? (COMMANDS.matrix as string)
            : "[TERMINATED] Matrix protocol manual override.",
        ]);
      }
    } else if (cmd === "ask") {
      const question = parts.slice(1).join(" ");
      if (!question) {
        setHistory([
          ...history,
          `> ${input}`,
          "Error: No query parameter detected. Usage: ask <question>",
        ]);
      } else {
        setHistory([
          ...history,
          `> ${input}`,
          `[NEURAL_LINK]: Analyzing query "${question}"...`,
        ]);
        setTimeout(() => {
          const responses = [
            "Optimizing vectors for maximum scalability.",
            "The architecture supports this hypothesis.",
            "Calculating potential ROI... User engagement trajectories look promising.",
            "Sajilo Core suggests a React-based solution.",
            "Processing... Outlook: POSITIVE.",
          ];
          const randomResponse =
            responses[Math.floor(Math.random() * responses.length)];
          setHistory((prev) => [...prev, `[NEURAL_LINK]: ${randomResponse}`]);
        }, 1500);
      }
    } else if (cmd === "cd" || cmd === "goto" || cmd === "move") {
      const page = arg;
      if (PAGES.includes(page)) {
        // Instant navigation
        router.push(`/${page === "home" ? "" : page}`);

        // Close terminal if it's an overlay
        if (isOverlay) {
          window.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
          );
        }
      } else {
        setHistory([
          ...history,
          `> ${input}`,
          `Invalid coordinate: ${page}. Use 'ls' for valid nodes.`,
        ]);
      }
    } else if (
      cmd === "exit" ||
      cmd === "exit()" ||
      cmd === "esc" ||
      cmd === "quit"
    ) {
      if (isOverlay) {
        // Close the overlay terminal
        window.dispatchEvent(
          new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
        );
      } else {
        setHistory([
          ...history,
          `> ${input}`,
          "Terminal session ended. Refresh to restart.",
        ]);
      }
    } else if (
      [
        "facebook",
        "fb",
        "instagram",
        "insta",
        "github",
        "linkedin",
        "youtube",
      ].includes(cmd)
    ) {
      const response =
        typeof COMMANDS[cmd] === "function"
          ? (COMMANDS[cmd] as () => string)()
          : COMMANDS[cmd];
      setHistory([...history, `> ${input}`, response as string]);
      // Extract URL and open it
      const urlMatch = (response as string).match(/https?:\/\/[^\s]+/);
      if (urlMatch) {
        setTimeout(() => window.open(urlMatch[0], "_blank"), 500);
      }
    } else if (cmd in COMMANDS) {
      const output =
        typeof COMMANDS[cmd] === "function"
          ? (COMMANDS[cmd] as Function)()
          : COMMANDS[cmd];
      setHistory([...history, `> ${input}`, output]);
    } else if (cmd !== "") {
      setHistory([
        ...history,
        `> ${input}`,
        `Command rejected: ${cmd}. Unrecognized by Sajilo_Core.`,
      ]);
    }

    setInput("");
  };

  return isOverlay ? (
    <div className="w-full h-full">
      {/* Terminal Content without Section Wrapper */}
      <TerminalContent
        isOverlay={isOverlay}
        input={input}
        inputRef={inputRef}
        scrollRef={scrollRef}
        history={history}
        handleCommand={handleCommand}
        handleKeyDown={handleKeyDown}
        setInput={setInput}
        setHistory={setHistory}
        isGlitching={isGlitching}
        isFullscreen={isFullscreen}
        isMinimized={isMinimized}
        setIsMinimized={setIsMinimized}
        setIsFullscreen={setIsFullscreen}
        isMatrix={isMatrix}
        matrixColor={matrixColor}
        isWarping={isWarping}
      />
    </div>
  ) : (
    <section className="relative py-20 bg-[#050505] px-6">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-[10px] items-center gap-2 font-black uppercase tracking-[0.8em] text-white/40 mb-4 flex">
            <span className="w-12 h-px bg-white/20" />
            Core Diagnostics
          </h2>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
            Sajilo Terminal <span className="text-blue-500">v1.0</span>
          </h3>
        </div>
        <TerminalContent
          isOverlay={isOverlay}
          input={input}
          inputRef={inputRef}
          scrollRef={scrollRef}
          history={history}
          handleCommand={handleCommand}
          handleKeyDown={handleKeyDown}
          setInput={setInput}
          setHistory={setHistory}
          isGlitching={isGlitching}
          isFullscreen={isFullscreen}
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
          setIsFullscreen={setIsFullscreen}
          isMatrix={isMatrix}
          matrixColor={matrixColor}
          isWarping={isWarping}
        />
      </div>
    </section>
  );
}

function TerminalContent({
  isOverlay,
  input,
  inputRef,
  scrollRef,
  history,
  handleCommand,
  handleKeyDown,
  setInput,
  setHistory,
  isGlitching,
  isFullscreen,
  isMinimized,
  setIsMinimized,
  setIsFullscreen,
  isMatrix,
  matrixColor,
  isWarping,
}: any) {
  return (
    <>
      <motion.div
        animate={{
          ...(isGlitching
            ? {
                x: [0, -4, 4, -4, 0],
                skewX: [0, 8, -8, 4, 0],
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(180deg)",
                  "hue-rotate(0deg)",
                ],
              }
            : {}),
          ...(isFullscreen
            ? {
                width: "100%",
                maxWidth: "100%",
                height: "85vh",
              }
            : {
                width: "100%",
                maxWidth: "1024px",
                height: isMinimized ? "44px" : "clamp(300px, 60vh, 550px)",
              }),
        }}
        transition={
          isGlitching
            ? {
                duration: 0.5,
                ease: "linear",
                repeat: 0,
              }
            : {
                type: "spring",
                stiffness: 150,
                damping: 20,
              }
        }
        className="relative mx-auto bg-black rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs md:text-sm group"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 backdrop-blur-md cursor-default relative z-20">
          <div className="flex gap-2.5">
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-all active:scale-90"
              title="Purge History"
            />
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all active:scale-90"
              title="Suspend Module"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-all active:scale-90"
              title="Maximize Throughput"
            />
          </div>
          <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">
            sajilodigital_kernel.bin@localhost
          </span>
          <div className="w-12 text-right">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-auto" />
          </div>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 h-[calc(100%-44px)] flex flex-col relative"
            >
              {/* Matrix Rain */}
              {isMatrix && <MatrixRain color={matrixColor} />}

              <div
                ref={scrollRef}
                className="relative z-10 flex-1 overflow-y-auto space-y-2 mb-6 scrollbar-hide text-cyan-500/80 font-medium selection:bg-cyan-500/30 selection:text-white"
              >
                {history.map((line: string, i: number) => (
                  <pre
                    key={i}
                    className="whitespace-pre-wrap leading-relaxed break-all drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                  >
                    {line}
                  </pre>
                ))}
              </div>

              <form
                onSubmit={handleCommand}
                className="relative z-10 flex items-center gap-3 border-t border-white/5 pt-5"
              >
                <span className="text-green-500 font-black tracking-tighter">
                  root@sajilo:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 placeholder:text-white/10"
                  placeholder="execute protocol..."
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal Command Line"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CRT FX */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/[0.04] to-transparent bg-[length:100%_4px] animate-scanline" />
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)" />
        </div>
      </motion.div>
    </>
  );
}
