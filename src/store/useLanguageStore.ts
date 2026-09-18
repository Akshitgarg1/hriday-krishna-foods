// ─────────────────────────────────────────────────────────────────────────────
// Language Store — Hriday Krishna Foods
// Manages EN / HI language preference with localStorage persistence.
// ─────────────────────────────────────────────────────────────────────────────
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Language = "en" | "hi";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set({ language: get().language === "en" ? "hi" : "en" }),
    }),
    {
      name: "hkf_language",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
