import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropDown from "../Partials/ProfileDropDown";
import { EMAIL } from "../../libs/constant";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const AccountQuestion = () => {
    const navigate = useNavigate();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prevState) => !prevState);
    };

    const logout = () => {
        localStorage.removeItem(EMAIL);
        setIsProfileDropdownOpen(false);
    };

    const navigateHome = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-white-700">
            <header className="flex justify-between items-center p-6 border-b">
                <h1
                    className="cursor-pointer text-3xl text-blue-700 font-bold"
                    onClick={navigateHome}
                >
                    COURSERA
                </h1>
                <div
                    className="flex items-center text-gray-800 cursor-pointer mr-3"
                    onClick={toggleProfileDropdown}
                >
                    <BiSolidUserCircle className="text-4xl " />
                    <AiOutlineDown className="text-md ml-1" />

                    {isProfileDropdownOpen && (
                        <ProfileDropDown logout={logout} />
                    )}
                </div>
            </header>

            <div className="px-40 py-10">
                <div className="pb-5">
                    <h1 className="text-3xl font-semibold">
                        Account & notifications
                    </h1>
                    <p className="text-lg mt-2">
                        Account settings, login issues, and notification
                        preferences
                    </p>
                </div>

                <div className="flex justify-between">
                    <div className="pt-5 pl-10">
                        <h1 className="text-xl font-semibold">
                            Account settings
                        </h1>
                        <div className="text-blue-500 ">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Set up your Coursera account
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Change your Coursera account settings
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Change your account language
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Update your profile name or verified name
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Delete your Coursera account
                            </p>
                        </div>
                    </div>

                    <div className="pt-5 pl-10 pr-40">
                        <h1 className="text-xl font-semibold">
                            Email notifications
                        </h1>
                        <div className="text-blue-500">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Change email settings for the forums
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Check and update your email communication
                                preferences
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-5">
                    <div className="pt-5 pl-10">
                        <h1 className="text-xl font-semibold">Login issues</h1>
                        <div className="text-blue-500">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Update your login settings
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Reset your Coursera password
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Reset your Coursera password
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Link or de-link your account with Google, Apple,
                                or Facebook
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Troubleshoot logging in with single sign on SSO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountQuestion;
