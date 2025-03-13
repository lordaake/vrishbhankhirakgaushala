import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo2.webp";

const AboutUsDropdown = ({ isOpen, onClose, t }) => {
    if (!isOpen) return null;

    const aboutUsLinks = [
        { path: "/about-us", hash: "#about-us", icon: "🌿", label: t("exploreOurStory.link.aboutUs.title") },
        { path: "/our-history", hash: "#our-history", icon: "📜", label: t("exploreOurStory.link.ourHistory.title") },
        { path: "/our-mission", hash: "#our-mission", icon: "🌱", label: t("exploreOurStory.link.ourMission.title") },
        { path: "/spiritual-significance", hash: "#spiritual-significance", icon: "🪔", label: t("exploreOurStory.link.spiritualSignificance.title") },
        { path: "/activities-at-gaushala", hash: "#activities-at-gaushala", icon: "🐄", label: t("exploreOurStory.link.gaushalaActivities.title") },
    ];

    return (
        <div className="absolute left-0 mt-2 w-64 bg-white backdrop-blur-sm border border-gray-300 rounded-lg shadow-xl z-30 p-4 transition-all duration-300 ease-in-out"
            onMouseLeave={onClose}>
            {aboutUsLinks.map((item, index) => (
                <Link
                    key={index}
                    to={`${item.path}${item.hash}`}
                    className="flex items-center gap-3 px-4 py-3 text-black hover:bg-yellow-400 hover:text-gray-900 hover:font-semibold transition rounded-md"
                    onClick={onClose}
                >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

const MediaDropdown = ({ isOpen, onClose, t }) => {
    if (!isOpen) return null;

    const mediaLinks = [
        { to: "/media/posts", icon: "📝", label: t("posts") },
        { to: "/media/videos", icon: "🎥", label: t("videos") },
        { to: "/media/galleries", icon: "🖼️", label: t("galleries") },
    ];

    return (
        <div className="absolute left-0 mt-2 w-60 bg-white backdrop-blur-sm border border-gray-300 rounded-lg shadow-xl z-30 p-4 transition-all duration-300 ease-in-out"
            onMouseLeave={onClose}>
            {mediaLinks.map((item, index) => (
                <Link
                    key={index}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-3 text-black hover:bg-yellow-400 hover:text-gray-900 hover:font-semibold transition rounded-md"
                    onClick={onClose}
                >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

const DesktopLink = ({ to, label, activeCondition }) => (
    <Link
        to={to}
        className={`transition transform hover:scale-105 px-4 py-1 rounded-full border ${activeCondition
            ? "bg-yellow-400 text-gray-900 font-bold border-black border-opacity-10"
            : "text-gray-900 hover:bg-yellow-400 hover:text-gray-900 border-none"
            }`}
    >
        {label}
    </Link>
);

const Navbar = ({ language, changeLanguage }) => {
    const [mediaOpen, setMediaOpen] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();

    // Automatically close dropdowns and mobile menu on location change
    useEffect(() => {
        setMediaOpen(false);
        setAboutUsOpen(false);
        setMobileMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;
    const isActiveMedia = () => location.pathname.startsWith("/media");

    return (
        <nav className="w-full mx-auto relative z-40">
            {/* Desktop Navbar */}
            <div className="hidden md:block">
                <div className="bg-gradient-to-r from-indigo-800 to-black backdrop-blur-lg shadow-xl border-b border-purple-600">
                    <div className="max-w-6xl mx-auto flex items-center justify-between h-24 px-6">
                        <Link to="/" className="flex items-center transition-transform hover:scale-105">
                            <img className="h-12 w-12 drop-shadow-2xl" src={logo} alt="Logo" />
                        </Link>
                        <Link to="/" className="flex flex-col items-center transition hover:opacity-90">
                            <span className="text-2xl font-serif font-bold text-white tracking-wide drop-shadow-md">
                                श्री वृषभान खिरक गौशाला
                            </span>
                            <span className="text-2xl font-serif font-bold text-yellow-400 tracking-wide drop-shadow-md">
                                Shri Vrishbhan Khirak Gaushala
                            </span>
                        </Link>
                        <div className="flex items-center space-x-3 pt-2">
                            <button
                                className={`px-3 py-1 rounded-full border transition duration-300 ${language === "hi" ? "border-yellow-300 text-yellow-300" : "border-white text-white hover:text-yellow-300"
                                    }`}
                                onClick={() => changeLanguage("hi")}
                            >
                                हिंदी
                            </button>
                            <span className="text-white">/</span>
                            <button
                                className={`px-3 py-1 rounded-full border transition duration-300 ${language === "en" ? "border-yellow-300 text-yellow-300" : "border-white text-white hover:text-yellow-300"
                                    }`}
                                onClick={() => changeLanguage("en")}
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white-900/90 backdrop-blur-md shadow-lg border-t border-yellow-600">
                    <div className="max-w-7xl mx-auto flex items-center justify-center h-16 px-6">
                        <div className="flex items-center justify-center space-x-8 w-full">
                            <DesktopLink to="/" label={t("home")} activeCondition={isActive("/")} />
                            {/* About Us Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setAboutUsOpen(!aboutUsOpen)}
                                    className={`flex items-center space-x-1 transition transform hover:scale-105 focus:outline-none px-3 py-1 rounded-full ${isActive("/about-us")
                                        ? "bg-yellow-400 text-gray-900 font-bold"
                                        : "text-gray-900 hover:bg-yellow-400 hover:text-gray-900"
                                        }`}
                                >
                                    <span>{t("aboutUs")}</span>
                                    <ChevronDownIcon
                                        className="h-5 w-5 transition-transform duration-300"
                                        style={{ transform: aboutUsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                    />
                                </button>
                                <AboutUsDropdown isOpen={aboutUsOpen} onClose={() => setAboutUsOpen(false)} t={t} />
                            </div>
                            <DesktopLink to="/contact-us" label={t("contactUsHeader")} activeCondition={isActive("/contact-us")} />

                            {/* Media Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setMediaOpen(!mediaOpen)}
                                    className={`flex items-center space-x-1 transition transform hover:scale-105 focus:outline-none px-3 py-1 rounded-full ${isActiveMedia() ? "bg-yellow-400 text-gray-900 font-bold" : "text-gray-900 hover:bg-yellow-400 hover:text-gray-900"
                                        }`}
                                >
                                    <span>{t("media")}</span>
                                    <ChevronDownIcon
                                        className="h-5 w-5 transition-transform duration-300"
                                        style={{ transform: mediaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                    />
                                </button>
                                <MediaDropdown isOpen={mediaOpen} onClose={() => setMediaOpen(false)} t={t} />
                            </div>
                            <DesktopLink to="/donate" label={t("donateHeader")} activeCondition={isActive("/donate")} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center justify-between px-4 h-20 bg-gradient-to-r from-indigo-800 to-black backdrop-blur-md shadow-md border-b border-yellow-600">
                    <Link to="/" className="flex items-center transition-transform hover:scale-105">
                        <img className="h-12 w-12 drop-shadow-2xl" src={logo} alt="Logo" />
                    </Link>
                    <Link to="/" className="flex flex-col items-center transition hover:opacity-90">
                        <span className="text-sm sm:text-base font-serif font-bold text-white drop-shadow-md">
                            श्री वृषभान खिरक गौशाला
                        </span>
                        <span className="text-sm sm:text-base font-serif font-bold text-yellow-300 drop-shadow-md">
                            Shri Vrishbhan Khirak Gaushala
                        </span>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-3 rounded-full bg-yellow-300/20 hover:bg-yellow-300/40 focus:outline-none transition-all duration-300 ease-in-out"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="h-7 w-7 text-yellow-300 transition-transform duration-300 rotate-90" />
                        ) : (
                            <Bars3Icon className="h-7 w-7 text-gray-200 hover:text-yellow-300 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                <div className={`fixed inset-0 md:hidden z-40 transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    <div className="fixed top-0 left-0 w-64 h-full bg-white p-6 overflow-y-auto transition-transform duration-300 ease-in-out">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="mb-6 p-2 inline-flex items-center justify-center text-gray-900 hover:text-yellow-300 transition focus:outline-none"
                            aria-label="Close mobile menu"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>

                        <nav className="flex flex-col gap-4">
                            <Link
                                to="/"
                                className="group relative transition transform hover:scale-105 hover:shadow-lg px-3 py-1 rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className={`text-lg font-medium ${isActive("/") ? "bg-yellow-400 text-gray-900 font-bold border border-black border-opacity-10" : "text-gray-900 group-hover:bg-yellow-400 group-hover:text-gray-900"} px-3 py-1 rounded-full`}>
                                    {t("home")}
                                </span>
                            </Link>

                            {/* About Us Dropdown in Mobile */}
                            <div className="relative">
                                <button
                                    onClick={() => setAboutUsOpen(!aboutUsOpen)}
                                    className="group flex items-center justify-between transition transform hover:scale-105 px-3 py-1 rounded-full focus:outline-none"
                                >
                                    <span className="text-lg font-medium px-3 py-1 rounded-full">{t("aboutUs")}</span>
                                    <ChevronDownIcon className={`h-5 w-5 transition-transform ${aboutUsOpen ? "rotate-180" : ""}`} />
                                </button>
                                {aboutUsOpen && (
                                    <div className="mt-2 pl-4">
                                        {[
                                            { to: "/about-us", hash: "#about-us", icon: "🌿", label: t("exploreOurStory.link.aboutUs.title") },
                                            { to: "/our-history", hash: "#our-history", icon: "📜", label: t("exploreOurStory.link.ourHistory.title") },
                                            { to: "/our-mission", hash: "#our-mission", icon: "🌱", label: t("exploreOurStory.link.ourMission.title") },
                                            { to: "/spiritual-significance", hash: "#spiritual-significance", icon: "🪔", label: t("exploreOurStory.link.spiritualSignificance.title") },
                                            { to: "/activities-at-gaushala", hash: "#activities-at-gaushala", icon: "🐄", label: t("exploreOurStory.link.gaushalaActivities.title") },
                                        ].map((item, index) => (
                                            <Link
                                                key={index}
                                                to={`${item.to}${item.hash}`}
                                                className="flex items-center gap-2 text-base font-medium text-gray-900 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/contact-us"
                                className="group relative transition transform hover:scale-105 hover:shadow-lg px-3 py-1 rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className={`text-lg font-medium ${isActive("/contact-us") ? "bg-yellow-400 text-gray-900 font-bold border border-black border-opacity-10" : "text-gray-900 group-hover:bg-yellow-400 group-hover:text-gray-900"} px-3 py-1 rounded-full`}>
                                    {t("contactUsHeader")}
                                </span>
                            </Link>

                            {/* Media Dropdown in Mobile */}
                            <div className="relative">
                                <button
                                    onClick={() => setMediaOpen(!mediaOpen)}
                                    className="group flex items-center justify-between transition transform hover:scale-105 px-3 py-1 rounded-full focus:outline-none"
                                >
                                    <span className={`text-lg font-medium ${isActiveMedia() ? "bg-yellow-400 text-gray-900 font-bold border border-black border-opacity-10" : "text-gray-900 group-hover:bg-yellow-400 group-hover:text-gray-900"} px-3 py-1 rounded-full`}>
                                        {t("media")}
                                    </span>
                                    <ChevronDownIcon className={`h-5 w-5 transition-transform ${mediaOpen ? "rotate-180" : ""}`} />
                                </button>
                                {mediaOpen && (
                                    <div className="mt-2 pl-4">
                                        <Link
                                            to="/media/posts"
                                            className="flex items-center gap-2 text-base px-4 py-2 transition transform hover:scale-105 hover:text-yellow-300 block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="text-lg">📝</span>
                                            {t("posts")}
                                        </Link>
                                        <Link
                                            to="/media/videos"
                                            className="flex items-center gap-2 text-base px-4 py-2 transition transform hover:scale-105 hover:text-yellow-300 block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="text-lg">🎥</span>
                                            {t("videos")}
                                        </Link>
                                        <Link
                                            to="/media/galleries"
                                            className="flex items-center gap-2 text-base px-4 py-2 transition transform hover:scale-105 hover:text-yellow-300 block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="text-lg">🖼️</span>
                                            {t("galleries")}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/donate"
                                className="group relative transition transform hover:scale-105 hover:shadow-lg px-3 py-1 rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className={`text-lg font-medium ${isActive("/donate") ? "bg-yellow-400 text-gray-900 font-bold border border-black border-opacity-10" : "text-gray-900 group-hover:bg-yellow-400 group-hover:text-gray-900"} px-3 py-1 rounded-full`}>
                                    {t("donateHeader")}
                                </span>
                            </Link>

                            {/* Mobile Language Toggle */}
                            <div className="flex items-center gap-4 mt-6">
                                <button
                                    className={`text-base font-semibold transition duration-300 ${language === "hi" ? "text-yellow-300" : "text-gray-900 hover:text-yellow-300"}`}
                                    onClick={() => changeLanguage("hi")}
                                >
                                    हिंदी
                                </button>
                                <span className="text-gray-900">/</span>
                                <button
                                    className={`text-base font-semibold transition duration-300 ${language === "en" ? "text-yellow-300" : "text-gray-900 hover:text-yellow-300"}`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    English
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
