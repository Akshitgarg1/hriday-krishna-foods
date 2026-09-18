// ─────────────────────────────────────────────────────────────────────────────
// i18n Hook — Hriday Krishna Foods
//
// Usage:
//   const { t, lang, language } = useTranslation();
//   t("nav.shop")        → "Shop" | "दुकान"
//   t("cart.title")      → "Shopping Cart" | "आपकी शॉपिंग कार्ट"
//   t("checkout.placeOrder", { amount: "₹549" })  → interpolation support
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import type { Language } from "@/store/useLanguageStore";
import enRaw from "@/locales/en.json";
import hiRaw from "@/locales/hi.json";

// Type the full translation object from the EN file (source of truth)
export type Translations = typeof enRaw;

const locales: Record<Language, Translations> = {
  en: enRaw as Translations,
  hi: hiRaw as Translations,
};

/**
 * Drill into a nested object using a dot-path key.
 * e.g. get(obj, "nav.shop") → obj.nav.shop
 */
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[part];
  }
  if (typeof current === "string") return current;
  // fallback: return the key path itself so nothing is silently swallowed
  return path;
}

/**
 * Replace {placeholder} tokens in a string.
 * e.g. interpolate("Hello, {name}!", { name: "Ramesh" }) → "Hello, Ramesh!"
 */
function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] !== undefined ? String(vars[key]) : `{${key}}`
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const strings = locales[language] as unknown as Record<string, unknown>;

  /**
   * Translate a dot-path key with optional interpolation variables.
   * Falls back to EN if the key is missing in the current language.
   */
  function t(key: string, vars?: Record<string, string | number>): string {
    const value = getNestedValue(strings, key);
    // If not found in current lang, fall back to English
    if (value === key) {
      const enStrings = locales["en"] as unknown as Record<string, unknown>;
      const fallback = getNestedValue(enStrings, key);
      return interpolate(fallback, vars);
    }
    return interpolate(value, vars);
  }

  return { t, lang: language, language };
}
