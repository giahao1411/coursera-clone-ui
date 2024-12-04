import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-9xl mx-auto px-4 py-5 flex items-center justify-between">
                <div className="flex items-center ml-10">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-3xl font-bold text-blue-600"
                        aria-label="Home"
                    >
                        COURSERA
                    </NavLink>

                    <div className="flex items-center space-x-4 ml-4">
                        <div className="relative">
                            <button className="border border-blue-700 text-blue-700 rounded-md py-2 px-5 flex items-center justify-center">
                                Explore
                                <AiOutlineDown className="ml-2" />
                            </button>
                        </div>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                className="border px-4 py-2 rounded-3xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 w-96 pr-10"
                            />
                            <div className="border border-blue-600 bg-blue-600 text-white rounded-2xl p-1 text-xl absolute right-2 text-gray-500 cursor-pointer">
                                <CiSearch />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation links */}
                <div className="flex items-center space-x-7 mr-10">
                    <NavLink
                        to="/careers"
                        className="text-gray-600 hover:text-blue-600"
                    >
                        Careers
                    </NavLink>
                    <NavLink
                        to="/account/login"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to="/account/signup"
                        className="border border-blue-700 text-blue-700 bg-white-600 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white"
                    >
                        Join for Free
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
