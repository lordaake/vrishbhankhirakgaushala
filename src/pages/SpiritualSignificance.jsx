import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExploreOurStory from "../components/ExploreOurStory";
import Footer from "../components/Footer";
import SpiritualImage1 from "../assets/mothercow.png";

const SpiritualSignificance = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const targetRef = useRef(null);
    // Adjust this offset to push the content down further (e.g., if you have a fixed header)
    const scrollOffset = 40;
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
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#fff7e6] via-[#ffeed9] to-[#ffe4cc] relative overflow-hidden">
            <div className="relative z-30 w-full">
                <ExploreOurStory />
            </div>

            {/* Traditional Border Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTZiMzI2IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-20" />

            {/* Main Wrapper */}
            <div className="w-full max-w-6xl px-4 py-8 flex flex-col z-10">

                {/* Scroll Target: Place this div at the top of your sacred section */}
                <div id="spiritual-significance" ref={targetRef} />

                {/* Sacred Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-[0_4px_20px_-10px_rgba(230,107,50,0.3)] border-2 border-[#e6b326] p-6 md:p-10 max-w-[95%] mx-auto">
                    <div className="flex flex-col gap-8">
                        {/* Title Section */}
                        <div className="relative text-center mb-8">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-[#e6b326] opacity-30">
                                ॐ
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2a5c3d] font-['Arya'] relative">
                                {t("spiritualSignificance.title")}
                                <div className="mt-2 mx-auto w-32 h-1 bg-gradient-to-r from-[#e6b326] to-[#2a5c3d] rounded-full" />
                            </h2>
                        </div>

                        {/* Sacred Artwork */}
                        <div
                            className="relative group cursor-zoom-in"
                            onClick={() => openModal(SpiritualImage1)}
                        >
                            <div className="absolute inset-0 bg-[#2a5c3d]/10 rounded-lg transform rotate-1 -z-10" />
                            <div className="border-4 border-[#e6b326] rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src={SpiritualImage1}
                                    alt={t("spiritualSignificance.imageAlt")}
                                    className="w-full h-96 object-cover transform transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-4 right-4 bg-[#2a5c3d] text-[#ffe4cc] px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                {t("spiritualSignificance.imageCaption")}
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5, 6].map((section) => (
                                <div
                                    key={section}
                                    className="relative pl-6 border-l-4 border-[#e6b326]"
                                >
                                    <div className="absolute -left-3 top-0 w-6 h-6 bg-[#2a5c3d] rounded-full flex items-center justify-center text-[#ffe4cc]">
                                        {section}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2a5c3d] mb-3 font-['Arya']">
                                        {t(`spiritualSignificance.headline${section}`)}
                                    </h3>
                                    {section === 5 ? (
                                        <div className="bg-[#fff7e6] p-6 rounded-lg border-2 border-[#e6b326] italic text-[#2a5c3d] relative">
                                            <div className="absolute top-2 right-2 text-3xl text-[#e6b326]/30">
                                                〝
                                            </div>
                                            <p className="text-lg leading-relaxed">
                                                "{t("spiritualSignificance.quote")}"
                                            </p>
                                            <div className="absolute bottom-2 left-2 text-3xl text-[#e6b326]/30">
                                                〞
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-[#4a5568] leading-relaxed">
                                            {t(`spiritualSignificance.paragraph${section}`)}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Closing Blessing */}
                        <div className="mt-8 text-center bg-[#2a5c3d] p-6 rounded-lg shadow-inner">
                            <div className="text-4xl text-[#e6b326] mb-2">🪔</div>
                            <p className="text-xl text-[#ffe4cc] font-serif italic">
                                "{t("spiritualSignificance.closingMantra")}"
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Art-inspired Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-[90%] max-h-[90%] bg-white p-2 rounded-lg border-4 border-[#2a5c3d]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute -inset-2 border-2 border-[#e6b326] rounded-lg m-2 pointer-events-none" />
                        <img
                            src={modalImage}
                            alt={t("spiritualSignificance.modalImageAlt")}
                            className="max-w-full max-h-[80vh] object-contain rounded"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-2xl text-[#2a5c3d] bg-[#e6b326] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#d6a316] transition-colors"
                            aria-label={t("closeModal")}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default SpiritualSignificance;
