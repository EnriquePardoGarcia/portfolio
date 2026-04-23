import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";

function Type() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;

  const roles = [
    t("dataScientist"),
    t("mlEnthusiast"),
    t("biAnalytics"),
    t("deepLearning"),
  ];

  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
