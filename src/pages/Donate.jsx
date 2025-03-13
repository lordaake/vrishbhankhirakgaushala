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
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl md:text-4xl font-serif font-bold text-amber-800 mb-6">
                            {t("donate.heroSection.title")}
                        </h1>
                        <img
                            src={calvesImage}
                            alt={t("donate.heroSection.alt")}
                            className="mx-auto w-full rounded-2xl shadow-xl mb-8 border-4 border-amber-100"
                        />
                        <p className="text-lg text-amber-900 max-w-3xl mx-auto leading-relaxed">
                            {t("donate.heroSection.description")}
                        </p>
                    </div>
                </header>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Donation Options & Custom Donation */}
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif font-semibold text-amber-900 mb-8 flex items-center gap-2">
                                <FaDonate className="text-amber-600" />
                                {t("donate.selectSeva.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {donationItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-amber-100"
                                    >
                                        <h3 className="text-xl font-semibold text-amber-900 mb-3">
                                            {item.name}
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-bold text-amber-600 flex items-center">
                                                <FaRupeeSign className="mr-1" />
                                                {item.price.toLocaleString("en-IN")}
                                            </p>
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition flex items-center gap-2"
                                            >
                                                {t("donate.selectSeva.addToCart")}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Custom Donation */}
                        <section className="mb-12 bg-white rounded-xl p-6 shadow-lg border border-amber-100">
                            <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
                                {t("donate.customDonation.title")}
                            </h3>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={(e) => setCustomAmount(e.target.value)}
                                    placeholder={t("donate.customDonation.placeholder")}
                                    className="flex-1 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
                                />
                                <button
                                    onClick={handleAddCustomDonation}
                                    className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
                                >
                                    {t("donate.customDonation.buttonText")}
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Cart Sidebar */}
                    <div className="lg:sticky lg:top-8 lg:h-fit">
                        <section className="bg-white rounded-xl shadow-xl p-6 border border-amber-100">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif font-semibold text-amber-900">
                                    {t("donate.sevaBasket.title")}
                                </h2>
                                {cart.length > 0 && (
                                    <button
                                        onClick={handleClearCart}
                                        className="text-red-600 hover:text-red-700 flex items-center gap-1"
                                    >
                                        <FaTrash /> {t("donate.sevaBasket.clearCart")}
                                    </button>
                                )}
                            </div>

                            {cart.length > 0 ? (
                                <>
                                    <ul className="mb-6 space-y-3">
                                        {cart.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between items-center bg-amber-50 p-3 rounded-lg"
                                            >
                                                <div>
                                                    <p className="font-medium text-amber-900">{item.name}</p>
                                                    <p className="text-sm text-amber-600">
                                                        ₹ {item.price.toLocaleString("en-IN")}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveFromCart(index)}
                                                    className="text-red-500 hover:text-red-600"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border-t border-amber-200 pt-4">
                                        <p className="text-xl font-bold text-amber-900 mb-4">
                                            {t("donate.sevaBasket.totalSevaAmount")}
                                            <span className="ml-2 text-2xl">
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

                {/* Payment Section */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* UPI Payment */}
                    <section className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                        <div className="text-center">
                            <div className="inline-block bg-amber-100 p-4 rounded-full mb-4">
                                <FaQrcode className="text-4xl text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
                                {t("donate.upi.title")}
                            </h2>
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=shrib90848@barodampay&pn=VrishabhanuJiGaushala&am=${calculateTotal()}&cu=INR`}
                                alt={t("donate.upi.qrAlt")}
                                className="mx-auto w-48 h-48 mb-6 border-4 border-amber-100 rounded-xl"
                            />
                            <div className="bg-amber-50 p-4 rounded-lg mb-4">
                                <p className="font-mono text-lg font-bold text-amber-900 break-all">
                                    shrib90848@barodampay
                                </p>
                            </div>
                            <button
                                onClick={copyUPI}
                                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition flex items-center gap-2 mx-auto"
                            >
                                <FaCopy />
                                {showCopied
                                    ? t("donate.upi.copiedButtonText")
                                    : t("donate.upi.copyButtonText")}
                            </button>
                        </div>
                    </section>

                    {/* Bank Transfer */}
                    <section className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                        <h2 className="text-2xl font-serif font-semibold text-amber-900 mb-6">
                            {t("donate.bankTransfer.title")}
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-700 font-medium mb-1">
                                    {t("donate.bankTransfer.accountNameLabel")}
                                </p>
                                <p className="text-lg text-amber-900 font-semibold">
                                    {t("donate.bankTransfer.accountNameValue")}
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-700 font-medium mb-1">
                                    {t("donate.bankTransfer.accountNumberLabel")}
                                </p>
                                <p className="text-lg text-amber-900 font-semibold">
                                    {t("donate.bankTransfer.accountNumberValue")}
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-700 font-medium mb-1">
                                    {t("donate.bankTransfer.bankBranchLabel")}
                                </p>
                                <p className="text-lg text-amber-900 font-semibold">
                                    {t("donate.bankTransfer.bankBranchValue")}
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-700 font-medium mb-1">
                                    {t("donate.bankTransfer.ifscLabel")}
                                </p>
                                <p className="text-lg text-amber-900 font-semibold">
                                    {t("donate.bankTransfer.ifscValue")}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donate;
