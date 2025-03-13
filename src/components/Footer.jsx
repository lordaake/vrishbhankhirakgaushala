import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Import i18n for language switching

const Footer = () => {
    const { t } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang); // Switch language using i18n
    };

    return (
        <footer className="mt-auto bg-gradient-to-r from-indigo-800 to-black w-full py-6 shadow-inner">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4 md:px-8">
                {/* Language Toggle - Centered for Mobile, Top-Right for Desktop */}
                <div className="w-full flex justify-center mb-4">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
                        <button
                            className="px-3 py-1 rounded-full text-sm md:text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            onClick={() => handleLanguageChange("hi")}
                            aria-label="Switch to Hindi"
                        >
                            हिंदी
                        </button>
                        <span className="text-white text-sm md:text-base">/</span>
                        <button
                            className="px-3 py-1 rounded-full text-sm md:text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            onClick={() => handleLanguageChange("en")}
                            aria-label="Switch to English"
                        >
                            English
                        </button>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-6">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            alt={t("footerInstagramAlt")}
                            className="w-8 h-8 md:w-10 md:h-10 filter invert"
                        />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                            alt={t("footerFacebookAlt")}
                            className="w-8 h-8 md:w-10 md:h-10 filter invert"
                        />
                    </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
                        alt={t("footerLocationAlt")}
                        className="w-6 h-6 md:w-8 md:h-8 filter invert"
                    />
                    <span className="text-sm md:text-base font-serif text-white">
                        {t("addressFooter")}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;