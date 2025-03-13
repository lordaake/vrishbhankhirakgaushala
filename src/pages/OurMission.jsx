import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import MissionImage1 from "../assets/feeding.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const OurMission = () => {
    const { t } = useTranslation();
    const missionRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (image) => {
        setModalImage(image);
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#f0f9ff] to-[#e6f4ea] relative">
            {/* Navigation Component */}
            <div className="sticky top-0 z-30 w-full shadow-md">
                <ExploreOurStory />
            </div>

            {/* Dynamic Background - Less intensive for mobile */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkwIDQ1QzE2MCAxNSAxMjAgNSA4MCAxNSAzMCAyNSAxMCA2MCAyMCA5MGMxMCAzMCA0MCA1MCA3MCA0MCAzMC0xMCA1MC00MCA0MC03MHoiIGZpbGw9IiM4ZGJiZTYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none" />

            {/* Scroll Target */}
            <div id="our-mission" ref={missionRef} className="-mt-16 pt-16" />

            {/* Main Content */}
            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10">
                {/* Mission Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-[#8dbbe6]/20 p-4 sm:p-6 md:p-8 relative">
                    {/* Page Title */}
                    <header className="text-center mb-6 sm:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c5c7a] tracking-tight">
                            {t("ourMission")}
                        </h1>
                        <div className="mt-3 mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8dbbe6] to-[#4a90e2] rounded-full" />
                    </header>

                    <div className="space-y-8 sm:space-y-10">
                        {/* Mission Image */}
                        <div
                            className="relative group cursor-pointer overflow-hidden rounded-xl"
                            onClick={() => openModal(MissionImage1)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8dbbe6] to-[#4a90e2] rounded-xl transform scale-95 opacity-20 transition-opacity" />
                            <img
                                src={MissionImage1}
                                alt={t("missionImageAlt")}
                                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-md border-2 border-white transform transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2c5c7a] to-transparent p-3">
                                <span className="text-white font-medium text-sm block text-center">
                                    {t("missionImageCaption")}
                                </span>
                            </div>
                        </div>

                        {/* Mission Roadmap - Mobile-friendly grid */}
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div
                                    key={num}
                                    className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-[#e6f4ea] hover:border-[#8dbbe6] transition-all duration-300"
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="w-7 h-7 bg-[#4a90e2] rounded-full flex items-center justify-center text-white text-sm font-medium">
                                            {num}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#2c5c7a]">
                                            {t(`missionHeadline${num}`)}
                                        </h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-[#4a6c7a] leading-relaxed">
                                        {t(`missionParagraph${num}`)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action - Simplified for mobile */}
                        <div className="bg-gradient-to-br from-[#8dbbe6] to-[#4a90e2] p-4 sm:p-6 rounded-xl text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                                {t("joinOurMission")}
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base mb-4 max-w-lg mx-auto">
                                {t("missionCTA")}
                            </p>
                            <button className="bg-white text-[#2c5c7a] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-[#e6f4ea] transition-colors shadow-md">
                                {t("getInvolved")}
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Image Modal - Mobile-friendly */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white"
                        aria-label="Close image"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>

                    <img
                        src={modalImage}
                        alt={t("enlargedMissionImageAlt")}
                        className="max-w-full max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default OurMission;
