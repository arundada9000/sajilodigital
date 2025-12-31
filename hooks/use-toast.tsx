"use client";

import * as React from "react";

type ToastVariant = "default" | "destructive";

export type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
};

type ToastContextType = {
  toasts: Toast[];
  toast: (toast: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
};

// ✅ Create the context with null as default
const ToastContext = React.createContext<ToastContextType | null>(null);

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = (data: Omit<Toast, "id">) => {
    const id = (++toastId).toString();
    setToasts((prev) => [{ id, ...data }, ...prev]);

    setTimeout(() => dismiss(id), 4000);
  };

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    // ✅ Correct usage: React component, not a namespace
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

// ✅ Hook to use the context
export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
