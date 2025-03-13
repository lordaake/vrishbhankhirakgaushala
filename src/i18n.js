import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation JSON files
import en from "./locales/en.json";
import hi from "./locales/hi.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        hi: { translation: hi }
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback if translation is missing
    interpolation: {
        escapeValue: false // React already prevents XSS
    }
});

export default i18n;
