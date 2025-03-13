import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import vrshbhanu71 from "../assets/vrshbhanu71.webp";
import vrshbhanu61 from "../assets/vrshbhanu61.webp";
import vrshbhanu32 from "../assets/vrshbhanu32.webp";
import vrshbhanu40 from "../assets/vrshbhanu40.webp";
import vrshbhanu52 from "../assets/vrshbhanu52.webp";
import vrshbhanu92 from "../assets/vrshbhanu92.webp";
import vrshbhanu77 from "../assets/vrshbhanu77.webp";
import vrshbhanu101 from "../assets/vrshbhanu101.webp";
import feeding from "../assets/feeding.webp"

const Carousel = () => {
    const images = [
        feeding,
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
        <div className="relative mx-auto w-full max-w-6xl md:mt-6">
            <div className="relative">
                {/* Main Carousel Container */}
                <div
                    {...handlers}
                    className="relative w-full overflow-hidden shadow-md rounded-lg"
                >
                    {/* Image Container with 16:9 aspect ratio */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out w-full h-full"
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
                                </div>
                            ))}
                        </div>

                        {/* "More" button as requested */}
                        <Link
                            to="/about-us"
                            className="absolute top-4 right-4 z-20 inline-flex items-center bg-amber-400 hover:bg-amber-500 text-amber-900 py-1 px-2.5 md:py-2 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors shadow-md"
                        >
                            More <ArrowRightIcon className="ml-1 w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Further enlarged Navigation Controls for better visibility */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-20">
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToPrevious();
                            }}
                            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 md:p-3.5 transition-all shadow-md"
                            aria-label="Previous slide"
                        >
                            <ChevronLeftIcon className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                        <button
                            onClick={() => {
                                setIsManual(true);
                                goToNext();
                            }}
                            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 md:p-3.5 transition-all shadow-md"
                            aria-label="Next slide"
                        >
                            <ChevronRightIcon className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                    </div>

                    {/* Improved Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleManualNavigation(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? "bg-amber-400 w-5"
                                    : "bg-white/60 hover:bg-white/80"
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
