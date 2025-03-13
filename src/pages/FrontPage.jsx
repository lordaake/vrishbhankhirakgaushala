import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import aboutUsImage from "../assets/about-us.webp";
import CalvesImage from "../assets/calves.webp";
import RadharaniImage from "../assets/Radharani2.webp";
import missionVideo from "../assets/Our_mission_Gaushala2.mp4";
import videoPoster from "../assets/video-poster.webp";

// Constants for reusable styles
const SECTION_BASE_CLASSES = "w-full px-4";
const CONTAINER_BASE_CLASSES =
    "p-8 md:p-12 rounded-2xl shadow-2xl max-w-6xl mx-auto relative overflow-hidden";
const TEXT_CLASSES = "text-[#4a5568] text-base md:text-lg leading-relaxed tracking-wide";
const BUTTON_BASE_CLASSES =
    "px-8 py-3 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none flex items-center gap-2";

const FrontPage = () => {
    const { t } = useTranslation();

    // Reusable Section Component
    const Section = ({ bgClass, children }) => (
        <section className={SECTION_BASE_CLASSES}>
            <div className={`${CONTAINER_BASE_CLASSES} ${bgClass}`}>{children}</div>
        </section>
    );

    return (
        <div className="bg-white flex flex-col gap-8 items-center overflow-hidden w-full">
            {/* Carousel */}
            <div className="w-full max-w-7xl px-4 relative">
                <div className="absolute inset-0 rounded-3xl pointer-events-none" />
                <Carousel />
            </div>

            {/* Radharani Section */}
            <Section bgClass="bg-gradient-to-br from-[#ff9933]/10 to-[#ff6b6b]/20">
                <div className="flex flex-col md:flex-row gap-8 items-center transform transition-all hover:shadow-2xl duration-300">
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#ff9933]/10 rounded-full blur-3xl" />
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkyIDk2Yy0xMS4yIDI0LjgtMzQgNDAtNjAgNDAtMzYgMC02NC0yOC44LTY0LTY0czI4LTY0IDY0LTY0YzI2IDAgNDguOCAxNS4yIDYwIDQweiIgZmlsbD0iI2ZmOTkzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
                        <img
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white/90 transition-transform duration-300 group-hover:scale-105"
                            src={RadharaniImage}
                            alt={t("radharaniAlt")}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-[#ff9933]/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex flex-col gap-5 max-w-prose text-center md:text-left relative z-10">
                        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#581c87]">
                            {t("divineLoveRadharani")} <span className="text-4xl ml-3">🪷</span>
                        </h2>
                        <p className={TEXT_CLASSES}>{t("radharaniDescription")}</p>
                    </div>
                </div>
            </Section>

            {/* About Us Section */}
            <Section bgClass="bg-white">
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
                    <div className="relative w-full md:w-1/2 h-80 overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={aboutUsImage}
                            alt={t("aboutUsAlt")}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/40 via-[#1e3a8a]/20 to-transparent rounded-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-[#1e3a8a]">
                            {t("aboutUs")} <span className="text-3xl ml-3">🌿</span>
                        </h2>
                        <p className={TEXT_CLASSES}>{t("aboutUsDescription")}</p>
                        <Link to="/about-us">
                            <button
                                className={`${BUTTON_BASE_CLASSES} bg-[#3b82f6] focus:ring-4 focus:ring-[#93c5fd]`}
                            >
                                {t("learnMore")} <span className="text-xl">→</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Mission Section */}
            <Section bgClass="bg-white">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl" />
                    <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left relative z-10">
                        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-[#065f46]">
                            {t("ourMission")} <span className="text-3xl ml-3">🌍</span>
                        </h2>
                        <p className={TEXT_CLASSES}>{t("missionDescription")}</p>
                        <Link to="/our-mission">
                            <button
                                className={`${BUTTON_BASE_CLASSES} bg-[#10b981] focus:ring-4 focus:ring-[#6ee7b7]`}
                            >
                                {t("discoverMission")} <span className="text-xl">→</span>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#10b981]/10 rounded-full blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <video
                                controls
                                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                                poster={videoPoster}
                                preload="metadata"
                            >
                                <source src={missionVideo} type="video/mp4" />
                                {t("videoUnsupported")}
                            </video>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Donate Section */}
            <Section bgClass="bg-gradient-to-br from-[#f59e0b]/10 to-[#f97316]/20">
                <div className="flex flex-col gap-10 items-center p-2 md:p-2">
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl" />
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#854d0e] text-center">
                        {t("supportMission")} <span className="text-4xl ml-3">🪔</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 w-full">
                        <div className="flex justify-center w-full md:w-1/2 relative">
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-3xl" />
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                                <img
                                    src={CalvesImage}
                                    alt={t("calvesAlt")}
                                    className="w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#854d0e]/40 via-[#854d0e]/20 to-transparent" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left relative z-10">
                            {[t("donateDescription1"), t("donateDescription2"), t("donateDescription3")].map(
                                (text, index) => (
                                    <p
                                        key={index}
                                        className={`${TEXT_CLASSES} bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-white/30`}
                                    >
                                        {text}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                    <Link to="/donate" className="mt-6 relative z-10">
                        <button
                            className={`${BUTTON_BASE_CLASSES} px-10 py-4 bg-[#f59e0b] text-xl rounded-full focus:ring-4 focus:ring-[#fcd34d]`}
                        >
                            {t("donateNow")} <span className="text-2xl">🙏</span>
                        </button>
                    </Link>
                </div>
            </Section>

            <Footer />
        </div>
    );
};

export default FrontPage;