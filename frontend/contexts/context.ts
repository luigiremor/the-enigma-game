import { createContext } from "react";

interface LanguageContextProps {
    language: "en" | "pt";
    setLanguage: (newLanguage: "en" | "pt") => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    setLanguage: () => { },
});

interface DarkModeContextProps {
    darkMode: boolean;
    setDarkMode: (newDarkMode: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
    darkMode: false,
    setDarkMode: () => { },
});
