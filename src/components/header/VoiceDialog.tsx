"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { voiceControl } from "../../lib/voice/voiceControl";
import { handleVoiceCommand } from "../../lib/voice/voiceCommands";
import { Mic, X, AlertCircle } from "lucide-react";

export default function VoiceDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [action, setAction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    setTranscript(null);
    setAction(null);
    setError(null);

    (async () => {
      // Small delay to let the modal animate in
      await new Promise(r => setTimeout(r, 500));

      const response = await voiceControl.startOnce();

      if (response.error) {
        setError(response.error);
        return;
      }

      if (response.transcript) {
        setTranscript(response.transcript);
        const act = handleVoiceCommand(response.transcript);
        if (act) {
          if (act.type === "navigate") setAction(`Navigating to ${act.href}`);
          else if (act.type === "call") setAction(`Calling ${act.number}`);
          else if (act.type === "email") setAction(`Emailing ${act.email}`);
        } else {
          setAction("Command not recognized.");
        }
      } else {
        setError("No voice detected.");
      }
    })();
  }, [open]);

  const onConfirm = () => {
    if (!transcript) return;

    const act = handleVoiceCommand(transcript);
    if (!act) {
      setError("Execution failed: Command not understood.");
      return;
    }

    switch (act.type) {
      case "navigate": window.location.href = act.href; break;
      case "call": window.location.href = `tel:${act.number}`; break;
      case "email": window.location.href = `mailto:${act.email}`; break;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[32px] shadow-[0_0_80px_rgba(0,0,0,0.8)] max-w-md w-full p-8 overflow-hidden z-[210]"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white italic uppercase">
                  Voice Interface
                </h2>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-bold mt-1">Sajilo AI v1.0</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-white/20 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className={`border rounded-2xl p-8 mb-6 transition-all duration-500 flex flex-col items-center justify-center min-h-[160px] relative ${error ? 'border-red-500/20 bg-red-500/5' : 'border-white/5 bg-white/5'}`}>

              {error ? (
                <div className="flex flex-col items-center gap-4 text-center">
                  <AlertCircle className="text-red-500 w-8 h-8 opacity-50" />
                  <p className="text-sm font-medium text-red-400 capitalize">{error.replace('-', ' ')}</p>
                  <button onClick={() => window.location.reload()} className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors underline underline-offset-4 mt-2">Try Re-init</button>
                </div>
              ) : transcript ? (
                <p className="text-xl text-white font-medium text-center italic tracking-tight">"{transcript}"</p>
              ) : (
                <div className="flex flex-col items-center gap-6 w-full">
                  <div className="flex gap-2 items-end h-10 w-full justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "80%", "40%", "100%", "20%"] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        className="w-1.5 bg-blue-500 rounded-full"
                      />
                    ))}
                  </div>
                  <p className="text-[9px] tracking-[0.4em] text-blue-400 font-bold uppercase animate-pulse">Awaiting Signal</p>
                </div>
              )}
            </div>

            {action && !error && (
              <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-[10px] tracking-widest text-blue-400 font-bold uppercase text-center italic">{action}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={onClose}
                className="py-4 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white hover:bg-white/5 transition-all"
              >
                Dismiss
              </button>
              <button
                onClick={onConfirm}
                disabled={!transcript || !!error}
                className="py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-[0.3em] hover:bg-blue-500 shadow-lg shadow-blue-500/20 disabled:opacity-10 transition-all"
              >
                Execute
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
