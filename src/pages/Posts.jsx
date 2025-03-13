import React from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Posts = () => {
    const { t } = useTranslation();
    const posts = []; // No posts yet.

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Clean Header with White Background */}
            <header className="w-full py-12 bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        {t("mediaPosts")}
                    </h1>
                    <p className="mt-3 text-lg md:text-xl text-gray-600">
                        {t("discoverSacredStories") || "Discover Sacred Stories & Divine Wisdom"}
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-center h-64">
                        <p className="text-center text-gray-700 text-2xl font-medium">
                            {t("noPostsYet") || "No posts yet."}
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Posts;
