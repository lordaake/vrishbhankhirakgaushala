import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import HistoryImage1 from "../assets/history.png";
import HistoryImage3 from "../assets/king.webp";
import HistoryImage2 from "../assets/temple.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const OurHistory = () => {
    const { t } = useTranslation();
    const historyRef = useRef(null);
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
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#faf4e1] to-[#e7d9c4] relative">
            {/* Navigation Component */}
            <div className="sticky top-0 z-30 w-full shadow-md">
                <ExploreOurStory />
            </div>

            {/* Light Paper Texture */}
            <div className="absolute inset-0 bg-[url('data:image/png;base64,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')] opacity-20 pointer-events-none" />

            {/* Scroll Target */}
            <div id="our-history" ref={historyRef} className="-mt-16 pt-16" />

            {/* Main Content */}
            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10">
                {/* History Section */}
                <section className="bg-[#f5e6d3] border-2 sm:border-4 border-[#d4c4a8] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 relative">
                    {/* Page Title */}
                    <header className="text-center mb-6 sm:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#5d4c3a] tracking-wide">
                            {t("ourHistory.historyTitle")}
                        </h1>
                        <div className="mt-3 mx-auto w-24 sm:w-32 h-1 bg-[#8b735b] rounded-full" />
                    </header>

                    {/* Historical Timeline Content */}
                    <div className="space-y-8 sm:space-y-12">
                        {/* Historical Images - Horizontal scroll on mobile, grid on larger screens */}
                        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                            <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory">
                                {[HistoryImage1, HistoryImage3].map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative group cursor-pointer min-w-[280px] sm:min-w-0 snap-start"
                                        onClick={() => openModal(img)}
                                    >
                                        <div className="absolute inset-0 bg-[#5d4c3a] rounded-lg transform rotate-1 -z-10" />
                                        <img
                                            src={img}
                                            alt={t(`ourHistory.image${index + 1}Alt`)}
                                            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md border-2 sm:border-4 border-[#e3d5c1] transition-transform duration-300 group-hover:scale-[0.98] group-hover:rotate-1 filter sepia-[0.3]"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5d4c3a] to-transparent p-3">
                                            <span className="text-white font-medium text-sm block text-center">
                                                {t(`ourHistory.image${index + 1}Caption`)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll indicator for mobile */}
                            <div className="flex space-x-1 justify-center mt-2 sm:hidden">
                                <span className="h-1 w-4 bg-[#8b735b] rounded-full"></span>
                                <span className="h-1 w-1 bg-[#8b735b] opacity-50 rounded-full"></span>
                            </div>
                        </div>

                        {/* Legacy Section */}
                        <div className="border-l-2 sm:border-l-4 border-[#d4c4a8] pl-4 sm:pl-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#5d4c3a] mb-4">
                                {t("ourHistory.legacyTitle")}
                            </h2>
                            <p className="text-base sm:text-lg text-[#5d4c3a] leading-relaxed">
                                {t("ourHistory.historyText")}
                            </p>
                        </div>

                        {/* Temple Section */}
                        <div className="pt-4">
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => openModal(HistoryImage2)}
                            >
                                <div className="absolute inset-0 bg-[#5d4c3a] rounded-lg transform -rotate-1 -z-10" />
                                <img
                                    src={HistoryImage2}
                                    alt={t("ourHistory.image3Alt")}
                                    className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-lg shadow-md border-2 sm:border-4 border-[#e3d5c1] filter sepia-[0.3]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5d4c3a] to-transparent p-3">
                                    <span className="text-white font-medium text-sm block text-center">
                                        {t("ourHistory.image3Caption")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Spiritual Connection */}
                        <div className="bg-[#e3d5c1] p-4 sm:p-6 rounded-lg">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#5d4c3a] mb-3 sm:mb-4">
                                {t("ourHistory.connectionTitle")}
                            </h2>
                            <p className="text-base sm:text-lg text-[#5d4c3a] leading-relaxed">
                                {t("ourHistory.connectionText")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Image Modal - Fullscreen */}
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
                        alt={t("ourHistory.modalImageAlt")}
                        className="max-w-full max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default OurHistory;
