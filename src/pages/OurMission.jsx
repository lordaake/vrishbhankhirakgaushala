import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import MissionImage1 from "../assets/feeding.png";

const OurMission = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const missionRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (image) => {
        setModalImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#f0f9ff] to-[#e6f4ea] relative overflow-hidden">
            {/* ExploreOurStory with higher z-index */}
            <div className="relative z-20 w-full">
                <ExploreOurStory />
            </div>

            {/* Dynamic Background Elements with pointer-events-none */}
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkwIDQ1QzE2MCAxNSAxMjAgNSA4MCAxNSAzMCAyNSAxMCA2MCAyMCA5MGMxMCAzMCA0MCA1MCA3MCA0MCAzMC0xMCA1MC00MCA0MC03MHoiIGZpbGw9IiM4ZGJiZTYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none"
            />
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8dbbe6]/20 to-transparent w-[200%] animate-sweep pointer-events-none"
            />

            <div className="w-full max-w-6xl px-4 py-8 flex flex-col z-10">
                {/* Mission Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-[#8dbbe6]/20 p-8 md:p-12 max-w-[95%] mx-auto">
                    <div className="flex flex-col gap-12">
                        {/* Compass-inspired Header */}
                        <div className="relative text-center space-y-4">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#4a90e2] rounded-full opacity-20 blur-xl" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2c5c7a] font-['Poppins'] tracking-tight">
                                <span className="text-[#4a90e2]">✧</span> {t("ourMission")} <span className="text-[#4a90e2]">✧</span>
                            </h2>
                            <div className="mx-auto w-48 h-1.5 bg-gradient-to-r from-[#8dbbe6] to-[#4a90e2] rounded-full" />
                        </div>

                        {/* Action-oriented Image */}
                        <div className="relative group cursor-zoom-in" onClick={() => openModal(MissionImage1)}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8dbbe6] to-[#4a90e2] rounded-2xl transform rotate-1 scale-95 opacity-20 group-hover:opacity-30 transition-opacity" />
                            <img
                                src={MissionImage1}
                                alt={t("missionImageAlt")}
                                className="w-full h-64 object-cover rounded-2xl shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-98"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2c5c7a] to-transparent p-4">
                                <span className="text-white font-medium text-sm flex items-center justify-center gap-2">
                                    <span className="text-lg">🌱</span>
                                    {t("missionImageCaption")}
                                </span>
                            </div>
                        </div>

                        {/* Mission Roadmap */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div key={num} className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#e6f4ea] hover:border-[#8dbbe6] transition-all duration-300">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#4a90e2] rounded-full flex items-center justify-center text-white">
                                            {num}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#2c5c7a]">
                                            {t(`missionHeadline${num}`)}
                                        </h3>
                                    </div>
                                    <p className="text-[#4a6c7a] leading-relaxed">
                                        {t(`missionParagraph${num}`)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 bg-gradient-to-br from-[#8dbbe6] to-[#4a90e2] p-8 rounded-2xl text-center space-y-4">
                            <h3 className="text-2xl font-bold text-white">
                                {t("joinOurMission")} 🌍
                            </h3>
                            <p className="text-white/90 mb-4">
                                {t("missionCTA")}
                            </p>
                            <button className="bg-white text-[#2c5c7a] px-8 py-3 rounded-full font-bold hover:bg-[#e6f4ea] transition-colors">
                                {t("getInvolved")}
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50" onClick={closeModal}>
                    <div className="relative max-w-[90%] max-h-[90%] bg-white p-4 rounded-xl" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={modalImage}
                            alt={t("enlargedMissionImageAlt")}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-2xl text-[#2c5c7a] hover:text-[#4a90e2] transition-colors"
                            aria-label={t("closeModal")}
                        >
                            ⨯
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default OurMission;
