import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // Import this

import vrshbhanu71 from "../assets/vrshbhanu71.webp";
import vrshbhanu61 from "../assets/vrshbhanu61.webp";
import vrshbhanu32 from "../assets/vrshbhanu32.webp";
import vrshbhanu40 from "../assets/vrshbhanu40.webp";
import vrshbhanu52 from "../assets/vrshbhanu52.webp";
import vrshbhanu92 from "../assets/vrshbhanu92.webp";
import vrshbhanu77 from "../assets/vrshbhanu77.webp";
import vrshbhanu101 from "../assets/vrshbhanu101.webp";

const Carousel = () => {
    const images = [
        vrshbhanu71,
        vrshbhanu61,
        vrshbhanu32,
        vrshbhanu40,
        vrshbhanu52,
        vrshbhanu92,
        vrshbhanu77,
        vrshbhanu101,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [buttonHovered, setButtonHovered] = useState(false);

    // Check for mobile viewport
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setIsManual(true);
            goToNext();
        },
        onSwipedRight: () => {
            setIsManual(true);
            goToPrevious();
        },
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    useEffect(() => {
        if (isManual) return;
        const timer = setInterval(goToNext, 4000);
        return () => clearInterval(timer);
    }, [isManual, currentIndex]);

    const handleManualNavigation = (index) => {
        setIsManual(true);
        setCurrentIndex(index);
    };

    return (
        <div className="relative mx-auto w-full max-w-6xl my-4 md:my-6 px-2 md:px-0">
            <div className="relative">
                {/* Main Carousel Container */}
                <div
                    {...handlers}
                    className="relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-sm bg-gray-950/80"
                >
                    {/* Image Container - TALLER ON MOBILE */}
                    <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden">
                        <div
                            className="flex transition-all duration-700 ease-in-out w-full h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((src, index) => (
                                <div key={index} className="flex-shrink-0 w-full h-full relative">
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                    {/* Enhanced gradient overlay for better text contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-gray-900/30 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* "Discover Our Legacy" button - ENHANCED with beautiful design */}
                    <div className={`absolute ${isMobile ? 'bottom-16' : 'bottom-16 right-8'} ${isMobile ? 'left-1/2 -translate-x-1/2' : ''} z-20`}>
                        <Link
                            to="/about-us"
                            className="group relative inline-flex items-center"
                            onMouseEnter={() => setButtonHovered(true)}
                            onMouseLeave={() => setButtonHovered(false)}
                        >
                            {/* Decorative elements */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

                            {/* Main button - now with gradient and animation */}
                            <div className={`relative flex items-center gap-1 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-amber-50 to-amber-200 rounded-full font-serif font-medium text-amber-900 shadow-lg transition-all duration-300 ${buttonHovered ? 'pl-5 pr-6 sm:pl-6 sm:pr-7' : ''}`}>
                                <span className="text-xs sm:text-sm relative z-10">Discover Our Legacy</span>
                                <ArrowRightIcon
                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${buttonHovered ? 'translate-x-1 opacity-100' : 'opacity-70'}`}
                                />

                                {/* Shine effect on hover */}
                                <div className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-300 ${buttonHovered ? 'opacity-60' : 'opacity-0'}`}>
                                    <div className="absolute -inset-[400%] top-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-30deg] animate-shine"></div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-3 md:px-4 z-20">
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToPrevious();
                            }}
                            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 md:p-2 transition-all backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToNext();
                            }}
                            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 md:p-2 transition-all backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>

                    {/* Indicators - Improved visibility */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleManualNavigation(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? "bg-amber-400 w-4"
                                        : "bg-white/40 hover:bg-white/60"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Add this to your global CSS file or tailwind.config.js
// @keyframes shine {
//   to {
//     transform: translateX(400%) skewX(-30deg);
//   }
// }
// @keyframes pulse-slow {
//   50% {
//     opacity: 0.5;
//   }
// }
// .animate-shine {
//   animation: shine 4s ease-in-out infinite;
// }
// .animate-pulse-slow {
//   animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

export default Carousel;
