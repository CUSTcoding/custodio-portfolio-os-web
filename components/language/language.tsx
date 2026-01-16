
export type LanguageKeys = "pt" | "en"; 

export type TranslationKeys = keyof typeof translations.pt;


const translations = {
  pt: {
    welcome: "Bem-vindo ao CustOS",
    intro: "Olá! Eu sou Custódio Titosse ou <Cust Coding> este é o meu portifolio",
    about: "Sobre mim",
    escolhe:"Escolhe um usuario:",
    contact: "Contato",
    devops: "DevOps Fullstack",
    mobile: "Desenvolvedor Mobile",
    bitcoin: "Desenvolvedor Bitcoin",
    dataScientist: "Cientista de Dados",
  },
  en: {
    welcome: "Welcome to CustOS",
    intro: "Hello! I'm Custódio Titosse or <Cust Coding>, this is my portfolio",
    escolhe:"Switch one User:",
    about: "About me",
    contact: "Contact",
    devops: "Fullstack DevOps",
    mobile: "Mobile Developer",
    bitcoin: "Bitcoin Developer",
    about: "About me",
    contact: "Contact",
    devops: "Fullstack DevOps",
    mobile: "Mobile Developer",
    bitcoin: "Bitcoin Developer",
    dataScientist: "Data Scientist",
  },
};


export const t = (key: keyof typeof translations.pt, lang: LanguageKeys = "pt") => {
  return translations[lang][key] || key;
};
