import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GalleryDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    // Dummy gallery details (Replace with API later)
    const galleryDetails = {
        1: {
            title: "A Day at the Gaushala",
            images: [
                "https://source.unsplash.com/400x300/?cow,1",
                "https://source.unsplash.com/400x300/?cow,2",
                "https://source.unsplash.com/400x300/?cow,3",
            ],
        },
        2: {
            title: "Festivals of Devotion",
            images: [
                "https://source.unsplash.com/400x300/?temple,1",
                "https://source.unsplash.com/400x300/?temple,2",
                "https://source.unsplash.com/400x300/?temple,3",
            ],
        },
        3: {
            title: "Caring for Gau Mata",
            images: [
                "https://source.unsplash.com/400x300/?farmer,1",
                "https://source.unsplash.com/400x300/?farmer,2",
                "https://source.unsplash.com/400x300/?farmer,3",
            ],
        },
    };

    const gallery = galleryDetails[id] || {};

    return (
        <div className="bg-white min-h-screen flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold my-6">{gallery.title || t("galleryNotFound")}</h1>

            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.images?.map((img, index) => (
                    <img key={index} src={img} alt={`Gallery ${id}`} className="w-full h-48 object-cover rounded-lg" />
                ))}
            </div>
        </div>
    );
};

export default GalleryDetail;
