// lib/voice/voiceControl.ts
export const voiceControl = {
  startOnce(): Promise<{ transcript: string | null; error?: string }> {
    return new Promise((resolve) => {
      const SR =
        (window as any).webkitSpeechRecognition ||
        (window as any).SpeechRecognition;

      if (!SR) {
        resolve({ transcript: null, error: "Browser not supported." });
        return;
      }

      try {
        const rec = new SR();
        rec.lang = "en-US";
        rec.interimResults = false;
        rec.maxAlternatives = 1;

        rec.onresult = (e: any) => {
          const transcript = e.results?.[0]?.[0]?.transcript ?? "";
          resolve({ transcript });
        };

        rec.onerror = (e: any) => {
          resolve({ transcript: null, error: e.error || "Recognition error." });
        };

        rec.onend = () => {
          // Fallback if no result was triggered
          resolve({ transcript: null });
        };

        rec.start();
      } catch (err) {
        resolve({ transcript: null, error: "Microphone access failed." });
      }
    });
  },
};
