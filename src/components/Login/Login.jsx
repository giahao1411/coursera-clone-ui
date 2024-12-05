import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { EMAIL } from "../../libs/constant";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const tooglePasswordSVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessageType("error");
            setResponseMessage("Please fill all fields.");
        } else {
            localStorage.setItem(EMAIL, JSON.stringify({ email: email }));
            setMessageType("success");
            setResponseMessage("Login successfully!");
            navigate("/");
        }

        setTimeout(() => {
            setResponseMessage("");
            setMessageType("");
        }, 3000);
    };

    return (
        <div className="login-form max-w-md mx-auto border-2 p-10 mt-20">
            <h2 className="text-center text-3xl text-black-500 mt-5 mb-5">
                Welcome back
            </h2>

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
                <form className="space-y-4" onSubmit={handleLogin}>
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
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                            <div
                                className="text-xl absolute right-3 text-gray-500 cursor-pointer"
                                onClick={tooglePasswordSVisibility}
                            >
                                {showPassword ? <BsEye /> : <BsEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <div className="forgot-password text-blue-500 underline">
                        <Link to="/account/forgot-password">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div class="flex space-x-4">
                    <button class="flex items-center justify-center w-1/2 bg-white-500 text-black py-2 rounded-lg hover:text-white hover:bg-red-600 transition border border-black-900">
                        <img
                            src="/google.svg"
                            alt="Google"
                            class="w-6 h-6 mr-2"
                        />
                        Google
                    </button>
                    <button class="flex items-center justify-center w-1/2 bg-white-500 text-black py-2 rounded-lg hover:text-white hover:bg-blue-600 transition border border-black-900">
                        <img
                            src="/facebook.svg"
                            alt="Facebook"
                            class="w-6 h-6 mr-2"
                        />
                        Facebook
                    </button>
                </div>

                <p className="text-center text-gray-400 mt-8">
                    New to Coursera?{" "}
                    <Link
                        to="/account/signup"
                        className="text-blue-500 underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
