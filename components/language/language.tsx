
export type LanguageKeys = "pt" | "en"; 

export type TranslationKeys = keyof typeof translations.pt;


const translations = {
  pt: {
    welcome: "Bem-vindo ao CustOS",
    intro: "Olá! Eu sou Custódio Titosse ou <Cust Coding> este é o meu portifolio",
    escolhe:"Escolhe um usuario:",
  
  },
  en: {
    welcome: "Welcome to CustOS",
    intro: "Hello! I'm Custódio Titosse or <Cust Coding>, this is my portfolio",
    escolhe:"Switch one User:",
  
  },
};


export const t = (key: keyof typeof translations.pt, lang: LanguageKeys = "pt") => {
  return translations[lang][key] || key;
};
