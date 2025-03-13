import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExploreOurStory = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const scrollContainerRef = useRef(null);

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

    // Scroll active item into view when component mounts or location changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
            if (activeItem) {
                // Calculate the scroll position to center the active item
                const containerWidth = scrollContainerRef.current.offsetWidth;
                const itemLeft = activeItem.offsetLeft;
                const itemWidth = activeItem.offsetWidth;
                const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);

                scrollContainerRef.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [location.pathname]);

    return (
        <div className="w-full bg-gradient-to-r from-white to-amber-50 border-b border-amber-200 shadow-md">
            <nav className="max-w-6xl mx-auto px-0 md:px-4">
                {/* Mobile scrollable navigation (horizontal scroll) */}
                <div
                    className="md:hidden flex overflow-x-auto py-3 px-2 no-scrollbar"
                    ref={scrollContainerRef}
                >
                    <div className="flex items-center space-x-3 px-2">
                        {cardItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={index}
                                    to={`${item.path}${item.hash}`}
                                    data-active={isActive}
                                    className={`group whitespace-nowrap flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 flex-shrink-0 ${isActive
                                            ? "bg-amber-200 text-amber-900 shadow-inner"
                                            : "text-amber-800 bg-white/70 hover:bg-amber-100"
                                        }`}
                                >
                                    <span className="text-base transition-transform duration-300 group-hover:rotate-6">
                                        {item.icon}
                                    </span>
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop navigation (wrapped items) */}
                <div className="hidden md:flex flex-wrap items-center justify-center gap-4 py-2">
                    {cardItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={`${item.path}${item.hash}`}
                                className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 p-2 rounded-lg ${isActive
                                        ? "bg-amber-200 text-amber-900 shadow-inner"
                                        : "text-amber-800 hover:text-amber-900 hover:bg-amber-100 hover:shadow-md"
                                    }`}
                            >
                                <span className="text-lg transition-transform duration-300 group-hover:rotate-6">
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

// Add this to your global CSS to hide scrollbars but keep functionality
// .no-scrollbar::-webkit-scrollbar {
//     display: none;
// }
// .no-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
// }

export default ExploreOurStory;
