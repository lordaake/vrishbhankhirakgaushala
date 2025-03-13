import React from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Videos = () => {
    const { t } = useTranslation();

    // Currently no videos. You can add your YouTube video objects here later.
    const videos = [];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Clean Header Section */}
            <header className="w-full py-12 bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        {t("mediaVideos")}
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-600">
                        {t("watchAndExperienceTheDivine") || "Watch and Experience the Divine"}
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-12">
                <div className="max-w-5xl mx-auto px-4">
                    {videos.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Responsive 16:9 Video Container */}
                                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Video Details */}
                                    <div className="p-6">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            {t(video.title)}
                                        </h2>
                                        <p className="text-gray-600 text-base md:text-lg">
                                            {t(video.description)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-64">
                            <p className="text-center text-gray-700 text-2xl font-medium">
                                {t("noVideosYet") || "No videos yet."}
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Videos;
