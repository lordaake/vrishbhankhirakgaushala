import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import ActivityImage1 from "../assets/grass.png";
import ActivityImage2 from "../assets/milkingbucket.png";
import ActivityImage3 from "../assets/ladlitemple.png";
import ActivityImage4 from "../assets/caringcow.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GaushalaActivities = () => {
    const { t } = useTranslation();
    const gaushalaRef = useRef(null);
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

    // Activity data array
    const activities = [
        {
            img: ActivityImage1,
            key: 1,
            emoji: '🌱',
            titleKey: "gaushalaActivities.activity1.title",
            descriptionKey: "gaushalaActivities.activity1.description",
            altKey: "gaushalaActivities.activity1.imageAlt"
        },
        {
            img: ActivityImage2,
            key: 2,
            emoji: '🥛',
            titleKey: "gaushalaActivities.activity2.title",
            descriptionKey: "gaushalaActivities.activity2.description",
            altKey: "gaushalaActivities.activity2.imageAlt"
        },
        {
            img: ActivityImage3,
            key: 3,
            emoji: '🛕',
            titleKey: "gaushalaActivities.activity3.title",
            descriptionKey: "gaushalaActivities.activity3.description",
            altKey: "gaushalaActivities.activity3.imageAlt"
        },
        {
            img: ActivityImage4,
            key: 4,
            emoji: '❤️',
            titleKey: "gaushalaActivities.activity4.title",
            descriptionKey: "gaushalaActivities.activity4.description",
            altKey: "gaushalaActivities.activity4.imageAlt"
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-green-50 via-amber-50 to-sky-50 relative">
            {/* Navigation Component */}
            <div className="sticky top-0 z-30 w-full shadow-md">
                <ExploreOurStory />
            </div>

            {/* Simplified Background Elements - Better for mobile performance */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-green-200/30 to-blue-200/30 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-amber-200/30 to-green-200/30 opacity-50 pointer-events-none" />

            {/* Scroll Target */}
            <div id="activities-at-gaushala" ref={gaushalaRef} className="-mt-16 pt-16" />

            {/* Main Content */}
            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 z-10">
                {/* Activities Section */}
                <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4 sm:p-6 md:p-8">
                    {/* Section Header */}
                    <header className="text-center mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
                            {t("gaushalaActivities.title")}
                        </h1>
                        <div className="mt-3 mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-amber-400 to-green-400 rounded-full" />
                    </header>

                    {/* Activity Grid - One column on mobile, two on larger screens */}
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        {activities.map((activity) => (
                            <div
                                key={activity.key}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100"
                            >
                                <div className="p-3 sm:p-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-green-800 flex items-center gap-2 mb-2">
                                        <span className="text-xl sm:text-2xl">
                                            {activity.emoji}
                                        </span>
                                        {t(activity.titleKey)}
                                    </h3>
                                    <p className="text-sm sm:text-base text-green-700 leading-relaxed mb-3">
                                        {t(activity.descriptionKey)}
                                    </p>
                                    <div
                                        className="relative cursor-pointer rounded-lg overflow-hidden"
                                        onClick={() => openModal(activity.img)}
                                    >
                                        <img
                                            src={activity.img}
                                            alt={t(activity.altKey)}
                                            className="w-full h-40 sm:h-48 md:h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/70 to-transparent py-2">
                                            <span className="absolute bottom-2 left-2 text-white text-xs sm:text-sm px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                                                {t("clickToExpand")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Mobile-optimized Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 p-2 bg-green-800 rounded-full text-white"
                        aria-label="Close image"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>

                    <img
                        src={modalImage}
                        alt={t("gaushalaActivities.modalAlt")}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default GaushalaActivities;