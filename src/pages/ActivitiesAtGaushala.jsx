import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ExploreOurStory from "../components/ExploreOurStory";
import ActivityImage1 from "../assets/grass.png";
import ActivityImage2 from "../assets/milkingbucket.png";
import ActivityImage3 from "../assets/ladlitemple.png";
import ActivityImage4 from "../assets/caringcow.png";

const GaushalaActivities = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const gaushalaRef = useRef(null);
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
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-green-50 via-amber-50 to-sky-50 relative overflow-hidden">
            {/* Wrap ExploreOurStory with a higher z-index */}
            <div className="relative z-30 w-full">
                <ExploreOurStory />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute -top-32 left-0 w-64 h-64 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-float" />
            <div className="absolute bottom-0 -right-32 w-72 h-72 bg-gradient-to-r from-amber-200 to-green-200 rounded-full opacity-20 blur-3xl animate-float-delayed" />

            {/* Main Wrapper */}
            <div className="w-full max-w-6xl px-4 py-8 flex flex-col gap-12 z-10">

                {/* Activities Section with Ref */}
                <section ref={gaushalaRef} id="gaushala-activities" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-12 max-w-[95%] mx-auto">
                    <div className="flex flex-col gap-12">
                        {/* Section Header */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                                {t("gaushalaActivities.title")}
                            </h2>
                            <div className="mx-auto w-48 h-1 bg-gradient-to-r from-amber-400 to-green-400 rounded-full" />
                        </div>

                        {/* Activity Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { img: ActivityImage1, key: 1 },
                                { img: ActivityImage2, key: 2 },
                                { img: ActivityImage3, key: 3 },
                                { img: ActivityImage4, key: 4 },
                            ].map((activity) => (
                                <div key={activity.key} className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl transform rotate-1 -z-10" />
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-2xl font-bold text-green-800 flex items-center gap-3">
                                            <span className="text-3xl">
                                                {activity.key === 1 && '🌱'}
                                                {activity.key === 2 && '🥛'}
                                                {activity.key === 3 && '🛕'}
                                                {activity.key === 4 && '❤️'}
                                            </span>
                                            {t(`gaushalaActivities.activity${activity.key}.title`)}
                                        </h3>
                                        <p className="text-green-900 leading-relaxed">
                                            {t(`gaushalaActivities.activity${activity.key}.description`)}
                                        </p>
                                        <div className="relative cursor-zoom-in" onClick={() => openModal(activity.img)}>
                                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent rounded-lg" />
                                            <img
                                                src={activity.img}
                                                alt={t(`gaushalaActivities.activity${activity.key}.imageAlt`)}
                                                className="w-full h-64 object-cover rounded-lg border-4 border-white transform transition-transform duration-300 group-hover:scale-95"
                                            />
                                            <span className="absolute bottom-4 left-4 text-white font-medium text-sm bg-green-900/30 px-3 py-1 rounded-full">
                                                {t("clickToExpand")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Enhanced Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50 animate-fadeIn"
                    onClick={closeModal}>
                    <div className="relative max-w-[90%] max-h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform transition-transform hover:scale-95"
                        onClick={(e) => e.stopPropagation()}>
                        <img
                            src={modalImage}
                            alt={t("gaushalaActivities.modalAlt")}
                            className="w-full h-full object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl text-white bg-green-900/30 rounded-full p-2 hover:bg-green-900/40 transition-colors"
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

export default GaushalaActivities;
