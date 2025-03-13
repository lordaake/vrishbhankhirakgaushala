import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import HistoryImage1 from "../assets/history.png";
import HistoryImage3 from "../assets/king.webp";
import HistoryImage2 from "../assets/temple.png";

const OurHistory = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const historyRef = useRef(null);
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
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#faf4e1] to-[#e7d9c4] relative overflow-hidden">
            {/* Wrap ExploreOurStory with a higher z-index */}
            <div className="relative z-30 w-full">
                <ExploreOurStory />
            </div>

            {/* Antique Paper Texture Overlay with pointer-events-none */}
            <div className="absolute inset-0 bg-[url('data:image/png;base64,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')] opacity-20 pointer-events-none" />

            {/* Scroll Target */}
            <div id="our-history" ref={historyRef} />

            {/* Main Wrapper */}
            <div className="w-full max-w-6xl px-4 py-8 flex flex-col gap-12 z-10">
                {/* History Section - Ancient Scroll Design */}
                <section className="bg-[#f5e6d3] border-4 border-[#d4c4a8] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-8 md:p-12 relative">
                    {/* Aged paper edge effect */}
                    <div className="absolute inset-0 border-[3px] border-[#e3d5c1] m-2 pointer-events-none" />

                    {/* Historical Timeline Decoration */}
                    <div className="absolute left-12 top-0 h-full w-1 bg-[#d4c4a8] hidden md:block">
                        <div className="absolute -left-2 top-24 w-5 h-5 rounded-full bg-[#8b735b]" />
                        <div className="absolute -left-2 bottom-24 w-5 h-5 rounded-full bg-[#8b735b]" />
                    </div>

                    <div className="flex flex-col gap-10 ml-0 md:ml-12">
                        {/* Engraved Title */}
                        <div className="relative text-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5d4c3a] font-['Trajan'] tracking-wide drop-shadow-md">
                                {t("ourHistory.historyTitle")}
                            </h2>
                            <div className="mt-4 mx-auto w-48 h-1 bg-[#8b735b] rounded-full" />
                        </div>

                        {/* Historical Gallery */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {[HistoryImage1, HistoryImage3].map((img, index) => (
                                <div key={index} className="relative group cursor-pointer" onClick={() => openModal(img)}>
                                    <div className="absolute inset-0 bg-[#5d4c3a] rounded-lg transform rotate-1 -z-10" />
                                    <img
                                        src={img}
                                        alt={t(`ourHistory.image${index + 1}Alt`)}
                                        className="w-full h-64 object-cover rounded-lg shadow-xl border-4 border-[#e3d5c1] transform transition-all duration-300 group-hover:scale-98 group-hover:rotate-1 filter sepia-30"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5d4c3a] to-transparent p-4">
                                        <span className="text-white font-medium text-sm block text-center">
                                            {t(`ourHistory.image${index + 1}Caption`)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Historical Text Content */}
                        <div className="space-y-8 pl-4 border-l-4 border-[#d4c4a8]">
                            <div className="relative">
                                <h3 className="text-3xl font-bold text-[#5d4c3a] mb-6 font-['Cinzel']">
                                    {t("ourHistory.legacyTitle")}
                                    <span className="ml-4 text-2xl text-[#8b735b]">✻</span>
                                </h3>
                                <p className="text-lg text-[#5d4c3a] leading-relaxed font-serif italic pl-4 border-l-2 border-[#d4c4a8]">
                                    {t("ourHistory.historyText")}
                                </p>
                            </div>

                            {/* Temple Section */}
                            <div className="relative mt-12">
                                <div className="absolute -left-4 top-4 text-3xl text-[#8b735b]">⌖</div>
                                <div className="pl-8">
                                    <div className="relative group cursor-pointer" onClick={() => openModal(HistoryImage2)}>
                                        <div className="absolute inset-0 bg-[#5d4c3a] rounded-lg transform -rotate-1 -z-10" />
                                        <img
                                            src={HistoryImage2}
                                            alt={t("ourHistory.image3Alt")}
                                            className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-[#e3d5c1] filter sepia-30"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5d4c3a] to-transparent p-4">
                                            <span className="text-white font-medium text-sm block text-center">
                                                {t("ourHistory.image3Caption")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Spiritual Connection */}
                            <div className="relative mt-12 bg-[#e3d5c1] p-6 rounded-lg">
                                <h3 className="text-3xl font-bold text-[#5d4c3a] mb-4 font-['Cinzel']">
                                    {t("ourHistory.connectionTitle")}
                                    <span className="ml-4 text-2xl text-[#8b735b]">✥</span>
                                </h3>
                                <p className="text-lg text-[#5d4c3a] leading-relaxed font-serif">
                                    {t("ourHistory.connectionText")}
                                </p>
                                <div className="absolute top-2 right-2 text-2xl text-[#8b735b]">🜍</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Antique Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50" onClick={closeModal}>
                    <div className="relative max-w-[90%] max-h-[90%] bg-[#f5e6d3] p-8 rounded-lg border-4 border-[#d4c4a8]" onClick={(e) => e.stopPropagation()}>
                        <div className="absolute inset-0 border-[3px] border-[#e3d5c1] m-2 pointer-events-none" />
                        <img
                            src={modalImage}
                            alt={t("ourHistory.modalImageAlt")}
                            className="max-w-full max-h-[80vh] object-contain filter sepia-30"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl text-[#5d4c3a] hover:text-[#8b735b] transition-colors"
                            aria-label="Close image modal"
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

export default OurHistory;
