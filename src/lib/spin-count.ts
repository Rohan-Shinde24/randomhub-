const storageKey = "randomhub:spin-count";
export const spinCountEvent = "randomhub:spin-count-change";

export function getSpinCount() {
  if (typeof window === "undefined") return 0;
  const value = Number(window.localStorage.getItem(storageKey));
  return Number.isSafeInteger(value) && value > 0 ? value : 0;
}

export function recordSpin() {
  if (typeof window === "undefined") return;
  const count = getSpinCount() + 1;
  window.localStorage.setItem(storageKey, String(count));
  window.dispatchEvent(new CustomEvent(spinCountEvent, { detail: count }));
}