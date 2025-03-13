import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50 flex flex-col">
            {/* Header Section with Decorative Overlay */}
            <div className="relative">
                <div className="absolute inset-0 opacity-20">
                    {/* Decorative SVG pattern */}
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 800 600"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="400" cy="300" r="300" fill="#ffb6c1" />
                        <circle cx="200" cy="150" r="100" fill="#ffc0cb" />
                        <circle cx="600" cy="450" r="150" fill="#ffb6c1" />
                    </svg>
                </div>
                <header className="relative z-10 w-full py-16 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-800 tracking-wide">
                        {t("contactUs.headerTitle")}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-medium text-gray-700">
                        {t("contactUs.headerDescription")}
                    </p>
                </header>
            </div>

            {/* Main Content */}
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-10">
                {/* Contact Information Cards */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Phone Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center transform transition hover:scale-105">
                        <div className="mb-4 p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full">
                            <FaPhone className="text-white text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-2">
                            {t("contactUs.callUsTitle")}
                        </h3>
                        <p className="text-gray-700 text-lg">{t("contactUs.phoneNumber")}</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center transform transition hover:scale-105">
                        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                            <FaEnvelope className="text-white text-3xl" />
                        </div>
                        <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-2">
                            {t("contactUs.emailUsTitle")}
                        </h3>
                        <a
                            href="mailto:vrishabhanujigaushala@gmail.com"
                            className="text-gray-700 text-lg hover:text-purple-700 transition-colors"
                        >
                            {t("contactUs.emailAddress")}
                        </a>
                    </div>
                </section>

                {/* Additional Options */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Connect With Us */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform transition hover:scale-105">
                        <h3 className="text-2xl font-bold font-serif text-purple-600">
                            {t("contactUs.connectWithUsTitle")}
                        </h3>
                        <p className="mt-3 text-md text-gray-700">
                            {t("contactUs.connectWithUsDescription")}
                        </p>
                        <div className="flex justify-center gap-8 mt-6">
                            <Link to="/facebook" className="text-blue-600 text-3xl hover:scale-110 transition-transform">
                                <FaFacebook />
                            </Link>
                            <Link to="/instagram" className="text-pink-500 text-3xl hover:scale-110 transition-transform">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform transition hover:scale-105">
                        <h3 className="text-2xl font-bold font-serif text-purple-600">
                            {t("contactUs.visitUsTitle")}
                        </h3>
                        <p className="mt-3 text-md text-gray-700">
                            {t("contactUs.visitUsDescription")}
                        </p>
                        <p className="mt-4 text-lg font-bold text-gray-900">
                            {t("contactUs.open247")}
                        </p>
                    </div>

                    {/* Support Us */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform transition hover:scale-105">
                        <h3 className="text-2xl font-bold font-serif text-purple-600">
                            {t("contactUs.supportUsTitle")}
                        </h3>
                        <p className="mt-3 text-md text-gray-700">
                            {t("contactUs.supportUsDescription")}
                        </p>
                    </div>
                </section>

                {/* Google Maps Embed */}
                <section className="mt-12">
                    <h3 className="text-3xl font-bold font-serif text-purple-600 text-center">
                        {t("contactUs.mapsTitle")}
                    </h3>
                    <div className="mt-6 mx-auto max-w-3xl border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            title="Vrishabhanuji Gaushala Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9173657773425!2d77.66816581541927!3d27.645046882823204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397319d9b68edd25:0x20b4e382bdb246f3!2sVrishabhanuji%20Gaushala!5e0!3m2!1sen!2sin!4v1650108771520!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;
