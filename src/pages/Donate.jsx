import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import calvesImage from "../assets/calves.png";
import { FaRupeeSign, FaTrash, FaCopy, FaQrcode, FaDonate } from "react-icons/fa";

const Donate = () => {
    const { t } = useTranslation();
    const [cart, setCart] = useState([]);
    const [customAmount, setCustomAmount] = useState("");
    const [showCopied, setShowCopied] = useState(false);

    // Use translated names for each donation item
    const donationItems = [
        { id: 1, name: t("donate.donationItems.item1.name"), price: 21000 },
        { id: 2, name: t("donate.donationItems.item2.name"), price: 21000 },
        { id: 3, name: t("donate.donationItems.item3.name"), price: 7700 },
        { id: 4, name: t("donate.donationItems.item4.name"), price: 15000 },
        { id: 5, name: t("donate.donationItems.item5.name"), price: 2300 },
        { id: 6, name: t("donate.donationItems.item6.name"), price: 1500 },
        { id: 7, name: t("donate.donationItems.item7.name"), price: 3100 }
    ];

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleRemoveFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const handleClearCart = () => {
        setCart([]);
        setCustomAmount("");
    };

    // Calculate the total based on cart items
    const calculateTotal = () => {
        return cart.reduce((acc, curr) => acc + curr.price, 0);
    };

    const copyUPI = () => {
        navigator.clipboard.writeText("shrib90848@barodampay");
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    const handleAddCustomDonation = () => {
        const amount = parseInt(customAmount, 10) || 0;
        if (amount > 0) {
            setCart([...cart, { id: Date.now(), name: t("donate.customDonation.customName"), price: amount }]);
            setCustomAmount("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
            <div className="w-full px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
                {/* Hero Section */}
                <header className="text-center mb-10 sm:mb-16 max-w-7xl mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-6">
                            {t("donate.heroSection.title")}
                        </h1>
                        <div className="max-w-full overflow-hidden">
                            <img
                                src={calvesImage}
                                alt={t("donate.heroSection.alt")}
                                className="mx-auto w-full rounded-2xl shadow-xl mb-8 border-4 border-amber-100"
                            />
                        </div>
                        <p className="text-base sm:text-lg text-amber-900 max-w-3xl mx-auto leading-relaxed px-2">
                            {t("donate.heroSection.description")}
                        </p>
                    </div>
                </header>

                {/* Main Content Layout */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                        {/* Donation Options & Custom Donation - Left Side */}
                        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                            <section className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-900 mb-6 sm:mb-8 flex items-center gap-2">
                                    <FaDonate className="text-amber-600" />
                                    {t("donate.selectSeva.title")}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {donationItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all border border-amber-100"
                                        >
                                            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-3">
                                                {item.name}
                                            </h3>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                                <p className="text-xl sm:text-2xl font-bold text-amber-600 flex items-center">
                                                    <FaRupeeSign className="mr-1" />
                                                    {item.price.toLocaleString("en-IN")}
                                                </p>
                                                <button
                                                    onClick={() => handleAddToCart(item)}
                                                    className="bg-amber-600 text-white w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2"
                                                >
                                                    {t("donate.selectSeva.addToCart")}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Custom Donation */}
                            <section className="mb-8 sm:mb-12 bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-amber-100">
                                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-amber-900 mb-4">
                                    {t("donate.customDonation.title")}
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        placeholder={t("donate.customDonation.placeholder")}
                                        className="flex-1 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
                                    />
                                    <button
                                        onClick={handleAddCustomDonation}
                                        className="bg-amber-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-amber-700 transition"
                                    >
                                        {t("donate.customDonation.buttonText")}
                                    </button>
                                </div>
                            </section>
                        </div>

                        {/* Cart Sidebar - Right Side */}
                        <div className="w-full lg:w-1/3">
                            <div className="lg:sticky lg:top-8">
                                <section className="bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-amber-100 mb-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-900">
                                            {t("donate.sevaBasket.title")}
                                        </h2>
                                        {cart.length > 0 && (
                                            <button
                                                onClick={handleClearCart}
                                                className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm sm:text-base"
                                            >
                                                <FaTrash /> {t("donate.sevaBasket.clearCart")}
                                            </button>
                                        )}
                                    </div>

                                    {cart.length > 0 ? (
                                        <>
                                            <ul className="mb-6 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                                                {cart.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between items-center bg-amber-50 p-3 rounded-lg"
                                                    >
                                                        <div className="pr-2 flex-1 min-w-0">
                                                            <p className="font-medium text-amber-900 truncate">{item.name}</p>
                                                            <p className="text-sm text-amber-600">
                                                                ₹ {item.price.toLocaleString("en-IN")}
                                                            </p>
                                                        </div>
                                                        <button
                                                            onClick={() => handleRemoveFromCart(index)}
                                                            className="text-red-500 hover:text-red-600 flex-shrink-0 ml-2"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="border-t border-amber-200 pt-4">
                                                <p className="text-lg sm:text-xl font-bold text-amber-900 flex flex-wrap justify-between">
                                                    <span>{t("donate.sevaBasket.totalSevaAmount")}</span>
                                                    <span className="text-xl sm:text-2xl">
                                                        ₹ {calculateTotal().toLocaleString("en-IN")}
                                                    </span>
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <p className="text-center text-amber-600 py-4">
                                            {t("donate.sevaBasket.emptyCartMessage")}
                                        </p>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 sm:mt-12">
                        {/* UPI Payment */}
                        <section className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100 w-full">
                            <div className="text-center">
                                <div className="inline-block bg-amber-100 p-4 rounded-full mb-4">
                                    <FaQrcode className="text-3xl sm:text-4xl text-amber-600" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-900 mb-4">
                                    {t("donate.upi.title")}
                                </h2>
                                <div className="max-w-[240px] mx-auto">
                                    <img
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=shrib90848@barodampay&pn=VrishabhanuJiGaushala&am=${calculateTotal()}&cu=INR`}
                                        alt={t("donate.upi.qrAlt")}
                                        className="w-full aspect-square object-contain border-4 border-amber-100 rounded-xl mb-6"
                                    />
                                </div>
                                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg mb-4 break-words">
                                    <p className="font-mono text-base sm:text-lg font-bold text-amber-900">
                                        shrib90848@barodampay
                                    </p>
                                </div>
                                <button
                                    onClick={copyUPI}
                                    className="bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2 mx-auto"
                                >
                                    <FaCopy />
                                    {showCopied
                                        ? t("donate.upi.copiedButtonText")
                                        : t("donate.upi.copyButtonText")}
                                </button>
                            </div>
                        </section>

                        {/* Bank Transfer */}
                        <section className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100 w-full">
                            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-900 mb-4 sm:mb-6">
                                {t("donate.bankTransfer.title")}
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                                    <p className="text-xs sm:text-sm text-amber-700 font-medium mb-1">
                                        {t("donate.bankTransfer.accountNameLabel")}
                                    </p>
                                    <p className="text-base sm:text-lg text-amber-900 font-semibold break-words">
                                        {t("donate.bankTransfer.accountNameValue")}
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                                    <p className="text-xs sm:text-sm text-amber-700 font-medium mb-1">
                                        {t("donate.bankTransfer.accountNumberLabel")}
                                    </p>
                                    <p className="text-base sm:text-lg text-amber-900 font-semibold break-words">
                                        {t("donate.bankTransfer.accountNumberValue")}
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                                    <p className="text-xs sm:text-sm text-amber-700 font-medium mb-1">
                                        {t("donate.bankTransfer.bankBranchLabel")}
                                    </p>
                                    <p className="text-base sm:text-lg text-amber-900 font-semibold break-words">
                                        {t("donate.bankTransfer.bankBranchValue")}
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                                    <p className="text-xs sm:text-sm text-amber-700 font-medium mb-1">
                                        {t("donate.bankTransfer.ifscLabel")}
                                    </p>
                                    <p className="text-base sm:text-lg text-amber-900 font-semibold break-words">
                                        {t("donate.bankTransfer.ifscValue")}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Donate;
