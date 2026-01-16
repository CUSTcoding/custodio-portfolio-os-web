"use client";

import { t, TranslationKeys } from "./language";
import { useLanguage } from "./LanguageContext";

interface TranslateProps {
  id: TranslationKeys;
}

const Translate: React.FC<TranslateProps> = ({ id }) => {
  const { lang } = useLanguage();
  return <>{t(id, lang)}</>;
};

export default Translate;
