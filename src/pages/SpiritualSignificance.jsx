import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ExploreOurStory from "../components/ExploreOurStory";
import Footer from "../components/Footer";
import SpiritualImage1 from "../assets/mothercow.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SpiritualSignificance = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (image) => {
        setModalImage(image);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#fff7e6] via-[#ffeed9] to-[#ffe4cc] relative">
            {/* Navigation Component */}
            <div className="sticky top-0 z-30 w-full shadow-md">
                <ExploreOurStory />
            </div>

            {/* Subtle Background Pattern - Lighter for mobile */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTZiMzI2IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-10 pointer-events-none" />

            {/* Scroll Target */}
            <div id="spiritual-significance" ref={targetRef} className="-mt-16 pt-16" />

            {/* Main Content */}
            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10">
                {/* Spiritual Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-[#e6b326] p-4 sm:p-6 md:p-8">
                    {/* Page Title */}
                    <header className="text-center mb-6 sm:mb-8">
                        <div className="text-4xl sm:text-5xl text-[#e6b326] opacity-30 mb-1">ॐ</div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a5c3d]">
                            {t("spiritualSignificance.title")}
                        </h1>
                        <div className="mt-3 mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-[#e6b326] to-[#2a5c3d] rounded-full" />
                    </header>

                    <div className="space-y-8">
                        {/* Sacred Image */}
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => openModal(SpiritualImage1)}
                        >
                            <div className="border-2 sm:border-4 border-[#e6b326] rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={SpiritualImage1}
                                    alt={t("spiritualSignificance.imageAlt")}
                                    className="w-full h-48 sm:h-64 md:h-80 object-cover transform transition duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-3 right-3 bg-[#2a5c3d] text-[#ffe4cc] px-3 py-1 rounded-full text-xs sm:text-sm">
                                {t("spiritualSignificance.imageCaption")}
                            </div>
                        </div>

                        {/* Content Sections - Simplified for mobile */}
                        <div className="space-y-6 sm:space-y-8">
                            {[1, 2, 3, 4, 5, 6].map((section) => (
                                <div
                                    key={section}
                                    className="relative pl-5 sm:pl-6 border-l-2 sm:border-l-4 border-[#e6b326]"
                                >
                                    <div className="absolute -left-2.5 top-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#2a5c3d] rounded-full flex items-center justify-center text-[#ffe4cc] text-xs sm:text-sm">
                                        {section}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2a5c3d] mb-2 sm:mb-3">
                                        {t(`spiritualSignificance.headline${section}`)}
                                    </h3>
                                    {section === 5 ? (
                                        <div className="bg-[#fff7e6] p-3 sm:p-5 rounded-lg border border-[#e6b326] italic text-[#2a5c3d]">
                                            <p className="text-base sm:text-lg leading-relaxed">
                                                "{t("spiritualSignificance.quote")}"
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                                            {t(`spiritualSignificance.paragraph${section}`)}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Closing Blessing - Simplified for mobile */}
                        <div className="text-center bg-[#2a5c3d] p-4 sm:p-6 rounded-lg shadow-inner">
                            <div className="text-3xl sm:text-4xl text-[#e6b326] mb-2">🪔</div>
                            <p className="text-base sm:text-xl text-[#ffe4cc] font-serif italic">
                                "{t("spiritualSignificance.closingMantra")}"
                            </p>
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
                        className="absolute top-4 right-4 z-10 p-2 bg-[#2a5c3d] rounded-full text-white"
                        aria-label="Close image"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>

                    <img
                        src={modalImage}
                        alt={t("spiritualSignificance.modalImageAlt")}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default SpiritualSignificance;
