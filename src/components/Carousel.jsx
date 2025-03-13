import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Carousel = () => {
    const images = [
        "src/assets/vrshbhanu71.webp",
        "src/assets/vrshbhanu61.webp",
        "src/assets/vrshbhanu32.webp",
        "src/assets/vrshbhanu40.webp",
        "src/assets/vrshbhanu52.webp",
        "src/assets/vrshbhanu92.webp",
        "src/assets/vrshbhanu77.webp",
        "src/assets/vrshbhanu101.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check for mobile viewport
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full h-full relative"
                                >
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* "Discover Our Legacy" button - REPOSITIONED on desktop */}
                    <div className={`absolute ${isMobile ? 'bottom-16' : 'top-4'} ${isMobile ? 'left-1/2 -translate-x-1/2' : 'right-4'} z-20`}>
                        <Link
                            to="/about-us"
                            className={`inline-flex items-center ${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-white/90 text-gray-900 rounded-md font-medium hover:bg-white transition-all shadow-sm backdrop-blur-sm`}
                        >
                            Discover Our Legacy
                        </Link>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-3 md:px-4 z-20">
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToPrevious();
                            }}
                            className="bg-black/20 hover:bg-black/30 text-white rounded-full p-1.5 md:p-2 transition-all"
                            aria-label="Previous slide"
                        >
                            <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToNext();
                            }}
                            className="bg-black/20 hover:bg-black/30 text-white rounded-full p-1.5 md:p-2 transition-all"
                            aria-label="Next slide"
                        >
                            <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>

                    {/* Indicators - MOVED DOWN on desktop to avoid button overlap */}
                    <div className={`absolute ${isMobile ? 'bottom-6' : 'bottom-4'} left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20`}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleManualNavigation(index)}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-white/40"
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

export default Carousel;
