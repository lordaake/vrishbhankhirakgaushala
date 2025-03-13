import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Add this import

const ExploreOurStory = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const scrollContainerRef = useRef(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);
    const [firstRender, setFirstRender] = useState(true);

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
        if (container) {
            setShowLeftScroll(container.scrollLeft > 20);
            setShowRightScroll(container.scrollLeft < container.scrollWidth - container.clientWidth - 20);
        }
    };

    // Handle scroll events
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
            return () => container.removeEventListener('scroll', checkScroll);
        }
    }, []);

    // Scroll active item into view & add initial scroll animation
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
            if (activeItem) {
                // Calculate the scroll position to center the active item
                const containerWidth = scrollContainerRef.current.offsetWidth;
                const itemLeft = activeItem.offsetLeft;
                const itemWidth = activeItem.offsetWidth;
                const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);

                // Scroll to the active item
                scrollContainerRef.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }

            // Add a gentle intro scroll animation to show scrollability on first render
            if (firstRender) {
                setTimeout(() => {
                    scrollContainerRef.current.scrollTo({
                        left: 40,
                        behavior: 'smooth'
                    });

                    // Then scroll back to simulate a "bounce" showing scrollability
                    setTimeout(() => {
                        scrollContainerRef.current.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                        setFirstRender(false);
                    }, 700);
                }, 500);
            }
        }
    }, [location.pathname, firstRender]);

    // Scroll handling functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
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

                    {/* Right scroll button/indicator - always visible first time */}
                    {showRightScroll && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent pr-1 pl-6 py-4 text-amber-800 focus:outline-none"
                            aria-label="Scroll right"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    )}

                    {/* Scrollable container with clear visual start/end */}
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
                                        <span className="text-base transition-transform duration-300 group-hover:rotate-6">
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
                        {cardItems.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 w-1 rounded-full bg-amber-800 opacity-40 ${location.pathname === cardItems[index].path ? 'w-3 opacity-100' : ''}`}
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

export default ExploreOurStory;