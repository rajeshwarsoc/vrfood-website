import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { getTranslation } from "../lib/i18n";

interface LanguageContextType {
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = "ru";
    }
  }, []);

  const t = getTranslation("ru");

  return <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
