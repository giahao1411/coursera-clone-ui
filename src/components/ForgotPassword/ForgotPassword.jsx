import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EMAIL } from "../../libs/constant";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessageType("error");
            setResponseMessage("Please fill all fields.");
        } else {
            setMessageType("success");
            setResponseMessage("A password link has been sent via your email.");
            localStorage.setItem(EMAIL, JSON.stringify({ email: email }));
        }

        setTimeout(() => {
            setResponseMessage("");
            setMessageType("");
            navigate("/account/email-sent");
        }, 3000);
    };

    const emailLinkClick = () => {
        if (!email) {
            setMessageType("error");
            setResponseMessage("Please fill all fields.");
        } else {
            setMessageType("success");
            setResponseMessage("Please check your inbox");
            localStorage.setItem(EMAIL, JSON.stringify({ email }));
        }

        setTimeout(() => {
            setResponseMessage("");
            setMessageType("");
            navigate("/account/check-inbox");
        }, 3000);
    };

    return (
        <div className="login-form max-w-md mx-auto border-2 p-10 mt-20">
            <h2 className="text-center text-3xl text-black-500 mt-5 mb-5">
                Forgot Password
            </h2>

            <p className="text-center text-gray-500 mt-8 mb-8">
                Enter the email address you use on Coursera. We'll send you a
                link to reset your password.
            </p>

            {responseMessage && (
                <div
                    className={`px-4 py-3 rounded relative mb-5 text-center ${
                        messageType === "success"
                            ? "bg-green-300 border border-green-300 text-green-700"
                            : "bg-red-300 border border-red-300 text-red-700"
                    }`}
                >
                    {responseMessage}
                </div>
            )}

            <div className="form-container">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="name@gmail.com"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Reset password
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div class="flex space-x-4">
                    <button
                        type="button"
                        className="w-full border border-blue-600 bg-white-600 text-blue-600 py-2 rounded-md hover:text-white hover:bg-blue-700"
                        onClick={emailLinkClick}
                    >
                        Email me a login link
                    </button>
                </div>

                <p className="text-center text-gray-400 mt-8">
                    Back to{" "}
                    <Link
                        to="/account/login"
                        className="text-blue-500 underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
