"use client";

import { useEffect, useState } from "react";
import { voiceControl } from "../../lib/voice/voiceControl";
import { handleVoiceCommand } from "../../lib/voice/voiceCommands";

export default function VoiceDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [action, setAction] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    setTranscript(null);
    setAction(null);

    (async () => {
      const result = await voiceControl.startOnce();
      if (result) {
        setTranscript(result);

        // Determine the fake AI action description
        const act = handleVoiceCommand(result);
        if (act) {
          if (act.type === "navigate") setAction(`Navigating to ${act.href}`);
          else if (act.type === "call") setAction(`Calling ${act.number}`);
          else if (act.type === "email") setAction(`Emailing ${act.email}`);
        } else {
          setAction("Sorry, I didn't understand that.");
        }
      }
    })();
  }, [open]);

  const onConfirm = () => {
    if (!transcript) return;

    const act = handleVoiceCommand(transcript);
    if (!act) {
      alert("Sorry, I couldn't understand the command.");
      onClose();
      return;
    }

    switch (act.type) {
      case "navigate":
        window.location.href = act.href;
        break;
      case "call":
        window.location.href = `tel:${act.number}`;
        break;
      case "email":
        window.location.href = `mailto:${act.email}`;
        break;
    }

    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Voice Assistant
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Speak naturally to search pages, FAQs, or perform actions. Example:
          “Go to Services” or “Contact CEO”.
        </p>

        <div className="border rounded-lg p-3 mb-4 bg-gray-50 min-h-[3rem]">
          {transcript ? (
            <p className="text-gray-900">{transcript}</p>
          ) : (
            <p className="text-gray-400 italic">Listening…</p>
          )}
        </div>

        {action && (
          <p className="text-sm text-blue-600 mb-4 italic">{action}</p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={!transcript}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
