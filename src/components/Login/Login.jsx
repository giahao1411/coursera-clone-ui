import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-form max-w-md mx-auto border-2 p-10 mt-20">
            <h2 className="text-center text-3xl text-black-500 mt-5 mb-14">
                Welcome back
            </h2>
            <div className="form-container">
                <form className="space-y-4">
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
                        <input
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="forgot-password text-blue-500 underline">
                        <a href="/account/forgot-password">Forgot password?</a>
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

                <div>
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
                        <a
                            href="/account/register"
                            className="text-blue-500 underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
