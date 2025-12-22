// lib/voice/voiceControl.ts
export const voiceControl = {
  startOnce(): Promise<string | null> {
    return new Promise((resolve) => {
      const SR =
        (window as any).webkitSpeechRecognition ||
        (window as any).SpeechRecognition;
      if (!SR) {
        alert("Voice recognition not supported in this browser.");
        resolve(null);
        return;
      }
      const rec = new SR();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e: any) => {
        const transcript = e.results?.[0]?.[0]?.transcript ?? "";
        resolve(transcript);
      };
      rec.onerror = () => resolve(null);
      rec.onend = () => {};
      rec.start();
    });
  },
};
