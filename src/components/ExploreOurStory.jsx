import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExploreOurStory = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const cardItems = [
        {
            path: "/about-us",
            hash: "#about-us",
            title: t("exploreOurStory.link.aboutUs.title"),
            icon: "🌿",
        },
        {
            path: "/our-history",
            hash: "#our-history",
            title: t("exploreOurStory.link.ourHistory.title"),
            icon: "📜",
        },
        {
            path: "/our-mission",
            hash: "#our-mission",
            title: t("exploreOurStory.link.ourMission.title"),
            icon: "🌱",
        },
        {
            path: "/spiritual-significance",
            hash: "#spiritual-significance",
            title: t("exploreOurStory.link.spiritualSignificance.title"),
            icon: "🪔",
        },
        {
            path: "/activities-at-gaushala",
            hash: "#activities-at-gaushala",
            title: t("exploreOurStory.link.gaushalaActivities.title"),
            icon: "🐄",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-r from-white to-amber-50 border-b border-amber-200 shadow-md">
            <nav className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4 py-2">
                    {cardItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={`${item.path}${item.hash}`}
                                className={`group relative flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all duration-300 p-1 sm:p-2 rounded-lg ${isActive
                                        ? "bg-amber-200 text-amber-900 shadow-inner"
                                        : "text-amber-800 hover:text-amber-900 hover:bg-amber-100 hover:shadow-md"
                                    }`}
                            >
                                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-6">
                                    {item.icon}
                                </span>
                                <span>{item.title}</span>
                                {/* Underline indicator with pointer-events disabled */}
                                <span
                                    className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full bg-amber-900 origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default ExploreOurStory;
