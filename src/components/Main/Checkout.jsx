import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const cartItems = [
    {
        name: "Machine Learning",
        by: "DeepLearning.AI",
        price: 20,
    },
    {
        name: "Software Engineer",
        by: "Google",
        price: 18.99,
    },
    {
        name: "Design UX/UI",
        by: "Mr. Ha Le Hoai Trung",
        price: 15.99,
    },
];

const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const Checkout = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const handleCardNumberChange = (e) => {
        // Remove all non-digit characters
        let value = e.target.value.replace(/\D/g, "");
        // Add a space after every 4 digits
        value = value.match(/.{1,4}/g)?.join(" ") || "";
        setCardNumber(value);
    };

    const handleExpirationDateChange = (e) => {
        // Get the current input value and remove any non-digit or non-slash characters
        let value = e.target.value.replace(/\D/g, "");
        // Add a slash after the month (MM)
        if (value.length > 2) {
            value = value.slice(0, 2) + " / " + value.slice(2, 4);
        }
        setExpirationDate(value);
    };

    const handleSecurityCodeChange = (e) => {
        // Get the current input value and remove any non-digit characters
        let value = e.target.value.replace(/\D/g, "");
        // Limit the input to 3 digits
        if (value.length > 3) {
            value = value.slice(0, 3);
        }
        setSecurityCode(value);
    };

    return (
        <main>
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Checkout section */}
                <div>
                    <h1 className="text-3xl font-semibold mb-7">Checkout</h1>
                    <h3 className="text-2xl font-semibold mb-7">
                        Billing information
                    </h3>

                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 my-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700 my-2"
                            >
                                Country
                            </label>
                            <select
                                id="country"
                                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            >
                                <option>Select your country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>

                        <div className="mt-7">
                            <h3 className="text-2xl font-semibold mb-2">
                                Payment methods
                            </h3>
                            <div className="border border-gray-400 p-5  rounded-md">
                                <div className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="card-number"
                                            className="block text-sm font-medium text-gray-700 my-2"
                                        >
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            id="card-number"
                                            placeholder="1234 1234 1234 1234"
                                            maxLength="19"
                                            value={cardNumber}
                                            onChange={handleCardNumberChange}
                                            className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                                        />
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <label
                                                htmlFor="expiration-date"
                                                className="block text-sm font-medium text-gray-700 my-2"
                                            >
                                                Expiration Date
                                            </label>
                                            <input
                                                type="text"
                                                id="expiration-date"
                                                placeholder="MM / YY"
                                                maxLength="7"
                                                value={expirationDate}
                                                onChange={
                                                    handleExpirationDateChange
                                                }
                                                className="w-full appearance-none border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                htmlFor="security-code"
                                                className="block text-sm font-medium text-gray-700 my-2"
                                            >
                                                Security Code
                                            </label>
                                            <input
                                                type="text"
                                                id="security-code"
                                                maxLength={3}
                                                placeholder="CVC"
                                                value={securityCode}
                                                onChange={
                                                    handleSecurityCodeChange
                                                }
                                                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 border border-gray-300 p-3 rounded-md">
                            <input
                                type="radio"
                                name="payment"
                                id="paypal"
                                className="mr-2"
                            />
                            <label
                                htmlFor="paypal"
                                className="text-md text-gray-700 font-semibold"
                            >
                                Paypal
                            </label>
                        </div>

                        <button className="ml-auto bg-blue-500 text-white px-14 py-2 mt-4 hover:bg-blue-600">
                            Pay
                        </button>
                        <p className="mt-3">
                            I argree to the{" "}
                            <NavLink className="text-blue-600 underline hover:text-blue-700">
                                Terms of Use
                            </NavLink>
                            ,{" "}
                            <NavLink className="text-blue-600 underline hover:text-blue-700">
                                Refund Policy
                            </NavLink>
                            , and{" "}
                            <NavLink className="text-blue-600 underline hover:text-blue-700">
                                Privacy Policy
                            </NavLink>
                            .
                        </p>
                    </form>
                </div>

                {/* Cart summary section */}
                <div>
                    <div className="space-y-4 border border-gray-400 p-5 rounded-md">
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-4"
                            >
                                <img
                                    src="/signal-2024-12-05-002042_002.png"
                                    alt={item.name}
                                    className="w-16 h-16"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        by {item.by}
                                    </p>
                                    <button className="text-blue-500 hover:underline text-sm mt-2">
                                        Remove from cart
                                    </button>
                                </div>
                                <p className="font-semibold">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        ))}

                        <p className="text-lg px-4 pt-10 font-semibold">
                            Total: ${calculateTotal()} USD
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
