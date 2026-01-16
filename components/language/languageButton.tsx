"use client";

import { useLanguage } from "./LanguageContext";

const LanguageButton = () => {
  const { lang, toggleLanguage, setLanguage } = useLanguage();

  return (
     <div className="flex bg-gray-600/40 p-2 items-center justify-center gap-2 rounded-xl font-bold">

      <i
        className="p-1 cursor-pointer rounded-md transition-colors"
        onClick={() => setLanguage("pt")}
        style={{
          backgroundColor: lang === "pt" ? "#00ffcc" : "transparent", 
          color: lang === "pt" ? "#0f0f0f" : "#ffffff",
        }}
      >
        PT
      </i>


      <i
        className="p-1 cursor-pointer rounded-md transition-colors"
        onClick={() => setLanguage("en")}
        style={{
          backgroundColor: lang === "en" ? "#00ffcc" : "transparent", 
          color: lang === "en" ? "#0f0f0f" : "#ffffff",
        }}
      >
        EN
      </i>
    </div>
  );
};

export default LanguageButton;
