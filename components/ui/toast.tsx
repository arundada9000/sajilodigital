"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "rounded-md border p-4 shadow-lg",
            toast.variant === "destructive"
              ? "bg-red-600 text-white"
              : "bg-background text-foreground"
          )}
        >
          <div className="flex justify-between gap-4">
            <div>
              {toast.title && (
                <p className="text-sm font-semibold">{toast.title}</p>
              )}
              {toast.description && (
                <p className="text-sm opacity-90">{toast.description}</p>
              )}
            </div>

            <button onClick={() => dismiss(toast.id)}>
              <X className="h-4 w-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
