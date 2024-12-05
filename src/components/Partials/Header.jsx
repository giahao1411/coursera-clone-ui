import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { BiGlobe, BiBell, BiSolidUserCircle } from "react-icons/bi";
import { EMAIL } from "../../libs/constant";

const Header = () => {
    const [user, setUser] = useState("");
    const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prevState) => !prevState);
    };

    const logout = () => {
        localStorage.removeItem(EMAIL);
        setUser("");
        setIsProfileDropdownOpen(false);
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem(EMAIL));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

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
                            <button
                                className="border border-blue-700 text-blue-700 rounded-md py-2 px-5 flex items-center justify-center"
                                onMouseEnter={() =>
                                    setIsExploreDropdownOpen(true)
                                }
                                onMouseLeave={() =>
                                    setIsExploreDropdownOpen(false)
                                }
                            >
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

                {user === "" ? (
                    // pre login header
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
                ) : (
                    <div className="flex items-center space-x-6 mr-10">
                        <BsCart3 className="text-xl" />
                        <div className="flex items-center">
                            <BiGlobe className="text-xl" />
                            <select className="py-1 w-[75px]">
                                <option>English</option>
                                <option>Vietnamese</option>
                            </select>
                        </div>
                        <BiBell className="text-xl" />
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={toggleProfileDropdown}
                        >
                            <BiSolidUserCircle className="text-4xl " />
                            <AiOutlineDown className="text-md ml-1" />
                        </div>
                    </div>
                )}
            </div>

            <div className="ml-14 space-x-4 py-2 -mt-4 text-gray-600">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "font-bold" : "hover:text-black"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/learn"
                    className={({ isActive }) =>
                        isActive ? "font-bold" : "hover:text-black"
                    }
                >
                    My Learning
                </NavLink>
                <NavLink
                    to="/careers"
                    className={({ isActive }) =>
                        isActive ? "font-bold" : "hover:text-black"
                    }
                >
                    Career
                </NavLink>
            </div>

            {isExploreDropdownOpen && (
                <div className="absolute left-56 -mt-8 w-64 bg-white border border-gray-300 rounded-md shadow-md">
                    <ul>
                        <li className="px-4 py-2 text-xl font-bold">
                            Subjects
                        </li>
                        <li className="px-4 py-1 hover:bg-gray-100">
                            Data Science
                        </li>
                        <li className="px-4 py-1 hover:bg-gray-100">
                            Business
                        </li>
                        <li className="px-4 py-1 hover:bg-gray-100">
                            Computer Science
                        </li>
                        <li className="px-4 py-1 hover:bg-gray-100">Health</li>
                        <li className="px-4 py-1 hover:bg-gray-100">
                            Social Science
                        </li>
                    </ul>
                </div>
            )}

            {isProfileDropdownOpen && (
                <div className="absolute right-3 -mt-8 mr-10 w-43 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                            <NavLink to="/purchases">My purchases</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                            <NavLink to="/setting">Settings</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                            <NavLink to="/help-center">Help center</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                            <NavLink to="/account/login" onClick={logout}>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
