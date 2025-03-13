import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { GiCow, GiFlowerEmblem } from "react-icons/gi";
import { IoIosFlower } from "react-icons/io";

const Footer = () => {
    const { t } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <footer className="mt-auto relative w-full py-8">
            {/* Decorative background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-900 to-indigo-950"></div>

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200"></div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side - Language Toggle & Social Media */}
                    <div className="rounded-lg p-5 bg-white/5 border border-white/10 shadow-lg order-2 md:order-1">
                        <div className="flex flex-col items-center">
                            {/* Language Toggle */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center space-x-1 bg-white/10 rounded-full p-1">
                                    <button
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === "hi"
                                            ? "bg-yellow-300 text-purple-900 shadow-inner"
                                            : "text-white hover:bg-white/20"
                                            }`}
                                        onClick={() => handleLanguageChange("hi")}
                                        aria-label="Switch to Hindi"
                                    >
                                        हिंदी
                                    </button>
                                    <button
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === "en"
                                            ? "bg-yellow-300 text-purple-900 shadow-inner"
                                            : "text-white hover:bg-white/20"
                                            }`}
                                        onClick={() => handleLanguageChange("en")}
                                        aria-label="Switch to English"
                                    >
                                        English
                                    </button>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <h3 className="text-white text-lg font-serif mb-4">
                                {t("contactUs.connectWithUsTitle")}
                            </h3>
                            <div className="flex gap-6">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-6 h-6 text-white" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-6 h-6 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Location with cow icon */}
                    <a
                        href="https://www.google.com/maps?ll=27.651865,77.370343&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=2356758655689443059"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-5 bg-white/5 border border-white/10 shadow-lg flex items-center order-1 md:order-2 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                    >
                        <div className="flex items-start">
                            <div className="relative">
                                <div className="bg-yellow-400/20 p-3 rounded-full flex-shrink-0 relative z-10">
                                    <FaMapMarkerAlt className="w-5 h-5 text-yellow-300" />
                                </div>
                                <div className="absolute -top-4 -right-4 text-amber-200/20">
                                    <GiCow className="w-10 h-10" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-white text-lg font-serif mb-2">
                                    {t("contactUs.visitUsTitle")}
                                </h3>
                                <p className="text-white font-serif mb-1">
                                    {t("addressFooter1")}
                                </p>
                                <p className="text-white/80 text-sm font-serif">
                                    {t("addressFooter2")}
                                </p>
                            </div>
                        </div>
                    </a>

                </div>

                {/* Divider with Om symbol */}
                <div className="flex justify-center my-8">
                    <div className="relative">
                        <div className="absolute h-px w-32 bg-white/20 left-0 top-1/2 transform -translate-x-full"></div>
                        <div className="text-yellow-300/60 mx-4">
                            <IoIosFlower className="w-6 h-6" />
                        </div>
                        <div className="absolute h-px w-32 bg-white/20 right-0 top-1/2 transform translate-x-full"></div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()} श्री वृषभान खिरक गौशाला. {t("allRightsReserved")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
