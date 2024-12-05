import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { BiGlobe, BiBell, BiSolidUserCircle } from "react-icons/bi";
import { EMAIL } from "../../libs/constant";
import ExploreDropDown from "./ExploreDropDown";
import ProfileDropDown from "./ProfileDropDown";
import SearchBoxDropDown from "./SearchBoxDropDown";

const Header = () => {
    const [user, setUser] = useState("");
    const [searchContent, setSearchContent] = useState("");

    const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const navigate = useNavigate();

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prevState) => !prevState);
    };

    const logout = () => {
        localStorage.removeItem(EMAIL);
        setUser("");
        setIsProfileDropdownOpen(false);
    };

    const handleSearch = () => {
        if (searchContent.trim() !== "") {
            navigate(
                `/search-result?query=${encodeURIComponent(searchContent)}`
            );
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem(EMAIL));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-8xl px-4 py-5 flex items-center justify-between">
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
                        <div
                            className="relative"
                            onMouseEnter={() => setIsExploreDropdownOpen(true)}
                            onMouseLeave={() => setIsExploreDropdownOpen(false)}
                        >
                            <button
                                className="border border-blue-700 text-blue-700 rounded-md py-2 px-5 flex items-center justify-center"
                                onMouseEnter={() =>
                                    setIsExploreDropdownOpen(true)
                                }
                            >
                                Explore
                                <AiOutlineDown className="ml-2" />
                            </button>

                            {isExploreDropdownOpen && <ExploreDropDown />}
                        </div>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                value={searchContent}
                                onChange={(e) =>
                                    setSearchContent(e.target.value)
                                }
                                className="border px-4 py-2 rounded-3xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 w-96 pr-10"
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="border border-blue-600 bg-blue-600 text-white rounded-2xl p-1 text-xl absolute right-2 text-gray-500 cursor-pointer">
                                <CiSearch onClick={handleSearch} />
                            </div>

                            {isFocus && <SearchBoxDropDown />}
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
                            {isProfileDropdownOpen && (
                                <ProfileDropDown logout={logout} />
                            )}
                        </div>
                    </div>
                )}
            </div>

            {user === "" ? (
                ""
            ) : (
                <div className="ml-14 space-x-4 py-4 -mt-4 text-gray-600">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "font-bold" : "hover:text-black"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/my-learning"
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
            )}
        </header>
    );
};

export default Header;
