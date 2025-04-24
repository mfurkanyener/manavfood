"use client";

import { createContext, useContext, useState, useEffect } from "react";
import tr from "@/locales/tr";
import en from "@/locales/en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("locale");
        if (savedLang) setLocale(savedLang);
    }, []);

    const changeLanguage = (lang) => {
        setLocale(lang);
        localStorage.setItem("locale", lang);
    };

    const messages = locale === "tr" ? tr : en;

    return (
        <LanguageContext.Provider value={{ locale, changeLanguage, messages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);