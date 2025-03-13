import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

// Hard-coded fake posts data
const fakePosts = [
    {
        id: "1",
        title: { rendered: "The Joy of Serving Cows" },
        content: {
            rendered:
                "<p>This is the full content of the post with more details about the timeless traditions of seva (service) at Radharani Gaushala. Every act of care is a celebration of divine bovine love and spiritual devotion.</p><p>Experience the sacred rituals, heartfelt stories, and the vibrant community that gathers to honor these ancient practices.</p>",
        },
        featured_media: "https://source.unsplash.com/800x400/?cow,india",
    },
    {
        id: "2",
        title: { rendered: "Sacred Milk Offerings to Ladli Temple" },
        content: {
            rendered:
                "<p>This post dives deep into the divine practice of preparing and offering pure milk. Learn how this ritual connects earthly devotion with celestial blessings, nourishing both body and soul.</p><p>Discover the rich heritage behind this sacred offering and the stories that have been passed down through generations.</p>",
        },
        featured_media: "https://source.unsplash.com/800x400/?temple,milk",
    },
];

const PostDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    // Find the fake post corresponding to the URL parameter
    const post = fakePosts.find((p) => p.id === id);

    if (!post) {
        return (
            <p className="text-red-500 text-center mt-10">
                {t("postNotFound") || "Post not found"}
            </p>
        );
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="max-w-3xl w-full mx-auto p-6">
                {/* Post Title */}
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    {post.title.rendered}
                </h1>

                {/* Featured Image */}
                {post.featured_media ? (
                    <img
                        src={post.featured_media}
                        alt={post.title.rendered}
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                    />
                ) : (
                    <img
                        src="https://source.unsplash.com/800x400/?cow"
                        alt="Placeholder"
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                    />
                )}

                {/* Post Content */}
                <div
                    className="text-gray-700 mt-4 leading-relaxed prose prose-indigo"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                {/* Back Button */}
                <Link
                    to="/media/posts"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                    {t("backToPosts") || "Back to Posts"}
                </Link>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PostDetail;
