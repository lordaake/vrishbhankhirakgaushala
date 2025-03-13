import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import SereneView from "../assets/sereneview.png";

const AboutUs = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const aboutRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-green-50 to-amber-50 flex flex-col items-center relative overflow-hidden">
            {/* Wrap ExploreOurStory with a higher z-index */}
            <div className="relative z-30 w-full">
                <ExploreOurStory />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-300 rounded-full opacity-20 blur-3xl animate-float" />
            <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-gradient-to-r from-amber-200 to-sky-300 rounded-full opacity-20 blur-3xl animate-float-delayed" />

            {/* Main Container */}
            <div className="w-full max-w-6xl px-4 py-8 flex flex-col gap-12 z-10">

                {/* About Section with Ref */}
                <div ref={aboutRef} id="about-us" className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300 p-8 md:p-12">
                    <div className="flex flex-col items-center gap-6">
                        {/* Title with decorative elements */}
                        <div className="relative w-full text-center">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
                                {t("aboutUs")}
                            </h2>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full" />
                        </div>

                        {/* Spiritual Quote */}
                        <blockquote className="text-lg md:text-xl text-center text-gray-700 font-semibold italic bg-white/50 px-6 py-4 rounded-xl border-l-4 border-emerald-500">
                            ✨ {t("spiritualGreeting")} ✨
                        </blockquote>

                        {/* Image Gallery Grid */}
                        <div className="w-full grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 relative group cursor-zoom-in" onClick={() => setIsModalOpen(true)}>
                                <img
                                    src={SereneView}
                                    alt={t("sereneViewAlt")}
                                    className="w-full h-64 object-cover rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-2xl" />
                                <span className="absolute bottom-4 left-4 text-white font-medium text-sm bg-black/30 px-3 py-1 rounded-full">
                                    {t("clickToExpand")}
                                </span>
                            </div>
                            <div className="hidden md:flex flex-col gap-6">
                                <div className="h-32 bg-green-100/50 rounded-2xl p-4 border-2 border-white shadow-md">
                                    <h3 className="text-emerald-700 font-bold mb-2">{t("rescuedCattle")}</h3>
                                    <p className="text-sm text-gray-600">
                                        {t("safeAndLoved")}
                                    </p>
                                </div>
                                <div className="h-32 bg-amber-100/50 rounded-2xl p-4 border-2 border-white shadow-md">
                                    <h3 className="text-amber-700 font-bold mb-2">
                                        {t("sustainableLiving")}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {t("ecoFriendlyPractices")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="w-full flex flex-col gap-8 max-w-3xl">
                            {[t("aboutUsParagraph1"), t("aboutUsParagraph2"), t("aboutUsParagraph4")].map((text, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed text-center md:text-lg font-medium animate-fadeInUp"
                                    style={{ animationDelay: `${index * 100}ms` }}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 animate-fadeIn"
                    onClick={() => setIsModalOpen(false)}>
                    <img
                        src={SereneView}
                        alt={t("enlargedGaushalaViewAlt")}
                        className="max-w-[90%] h-auto rounded-2xl shadow-2xl cursor-pointer transform transition-transform hover:scale-95"
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default AboutUs;