"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type LanguageKeys = "pt" | "en";

interface LanguageContextType {
  lang: LanguageKeys;
  toggleLanguage: () => void;
  setLanguage: (lang: LanguageKeys) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageKeys>("pt");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage: setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  return context;
};
