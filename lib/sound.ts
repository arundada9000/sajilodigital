const IS_MUTED_KEY = "sajilo_is_muted";

export const isMuted = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(IS_MUTED_KEY) === "true";
};

export const toggleMute = (): boolean => {
  if (typeof window === "undefined") return false;
  const muted = isMuted();
  const newState = !muted;
  localStorage.setItem(IS_MUTED_KEY, String(newState));
  return newState;
};

export const playSound = (src: string) => {
  if (isMuted()) return;
  const audio = new Audio(src);
  audio.volume = 0.4;
  audio.play().catch(() => { });
};
