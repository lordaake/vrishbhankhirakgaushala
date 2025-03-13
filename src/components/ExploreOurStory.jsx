import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ExploreOurStory = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const scrollContainerRef = useRef(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);
    const [initialScrollDone, setInitialScrollDone] = useState(false);

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

    // Check if should show scroll indicators
    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setShowLeftScroll(container.scrollLeft > 20);
        setShowRightScroll(container.scrollLeft < container.scrollWidth - container.clientWidth - 20);
    };

    // Handle scroll events
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener('scroll', checkScroll);
        checkScroll(); // Initial check

        return () => container.removeEventListener('scroll', checkScroll);
    }, []);

    // Set initial position and handle navigation
    useEffect(() => {
        try {
            const container = scrollContainerRef.current;
            if (!container) return;

            const activeItem = container.querySelector('[data-active="true"]');
            if (!activeItem) return;

            // Calculate the position that centers the active item
            const containerWidth = container.offsetWidth;
            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.offsetWidth;
            const scrollPosition = Math.max(0, itemLeft - (containerWidth / 2) + (itemWidth / 2));

            // On first render, immediately set position without animation 
            if (!initialScrollDone) {
                // Directly set scroll position to show the active item centered
                container.scrollLeft = scrollPosition;
                setInitialScrollDone(true);
            } else {
                // For subsequent navigation, smoothly center the active item
                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            console.error("Error positioning navigation:", error);
        }
    }, [location.pathname, initialScrollDone]);

    // Scroll handling functions
    const scrollLeft = () => {
        if (!scrollContainerRef.current) return;

        scrollContainerRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        if (!scrollContainerRef.current) return;

        scrollContainerRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full bg-gradient-to-r from-white to-amber-50 border-b border-amber-200 shadow-md">
            <nav className="max-w-6xl mx-auto relative">
                {/* Mobile scrollable navigation with explicit scrolling indicators */}
                <div className="md:hidden relative">
                    {/* Left scroll button */}
                    {showLeftScroll && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white to-transparent pl-1 pr-6 py-4 text-amber-800 focus:outline-none"
                            aria-label="Scroll left"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                    )}

                    {/* Right scroll button */}
                    {showRightScroll && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent pr-1 pl-6 py-4 text-amber-800 focus:outline-none"
                            aria-label="Scroll right"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    )}

                    {/* Scrollable container */}
                    <div
                        className="overflow-x-auto py-3 px-4 flex relative scrollbar-hide"
                        ref={scrollContainerRef}
                    >
                        <div className="flex items-center space-x-3 pr-6">
                            {cardItems.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={index}
                                        to={`${item.path}${item.hash}`}
                                        data-active={isActive}
                                        className={`group relative whitespace-nowrap flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 flex-shrink-0 ${isActive
                                                ? "bg-amber-200 text-amber-900 shadow-inner"
                                                : "text-amber-800 bg-white/70 hover:bg-amber-100"
                                            }`}
                                    >
                                        <span className="text-base">
                                            {item.icon}
                                        </span>
                                        <span>{item.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll indicator dots */}
                    <div className="flex justify-center mt-1 mb-1 space-x-1">
                        {cardItems.map((item, index) => (
                            <div
                                key={index}
                                className={`h-1 rounded-full bg-amber-800 transition-all duration-300 ${location.pathname === item.path
                                        ? 'w-3 opacity-100'
                                        : 'w-1 opacity-40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop navigation (wrapped items) */}
                <div className="hidden md:flex flex-wrap items-center justify-center gap-4 py-2 px-4">
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
                                <span className="text-lg">
                                    {item.icon}
                                </span>
                                <span>{item.title}</span>
                                <span
                                    className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full bg-amber-900 origin-left transition-transform duration-300 ${isActive
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
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
