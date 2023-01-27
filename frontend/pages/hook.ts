import { useContext } from 'react';
import { LanguageContext } from './context';

export function useLanguage() {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (newLanguage: "en" | "pt") => {
        setLanguage(newLanguage);
    };

    return { language, handleLanguageChange };
}

export default useLanguage;