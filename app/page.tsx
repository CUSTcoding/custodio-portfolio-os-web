"use client";

import Welcome_and_Lockscreen from "@/components/welcome/welcomw_and_lockscreen";
import Image from "next/image";
import { LanguageProvider } from "@/components/language/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <Welcome_and_Lockscreen/>
    </LanguageProvider>
  );
}
