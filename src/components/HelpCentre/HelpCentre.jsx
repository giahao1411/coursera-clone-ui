import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import ProfileDropDown from "../Partials/ProfileDropDown";
import { useNavigate } from "react-router-dom";

const HelpCentre = () => {
    const navigate = useNavigate();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prevState) => !prevState);
    };

    const logout = () => {
        localStorage.removeItem(EMAIL);
        setIsProfileDropdownOpen(false);
    };

    const navigateToCertificateQuestion = () => {
        navigate("/help-centre/certificate-question");
    }

    return (
        <div className="min-h-screen bg-blue-700 text-white">
            <header className="flex justify-between items-center p-6">
                <h1 className="text-3xl font-semibold">COURSERA</h1>
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

            <div className="text-center mt-6">
                <h2 className="text-5xl font-bold">Help centre</h2>
                <div className="mt-20 flex items-center justify-center">
                    <div className="relative w-2/3">
                        <input
                            type="text"
                            placeholder="Question for us"
                            className="w-full text-center pl-10 p-2 rounded-full text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <CiSearch className="border border-blue-600 rounded-full bg-blue-600 p-1 text-3xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-100" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-10 mt-20 py-20 bg-white text-black text-center">
                <div className="w-96 px-4 py-12 pb-16 border border-black flex flex-col items-center justify-center hover:bg-gray-100">
                    <FaUser className="text-6xl" />
                    <p className="mt-4 font-semibold text-2xl">
                        Account & notifications
                    </p>
                </div>

                <div className="w-96 px-4 py-12 pb-16 border border-black flex flex-col items-center justify-center hover:bg-gray-100">
                    <FaShoppingCart className="text-6xl " />
                    <p className="mt-4 font-semibold text-2xl">
                        Payments & subscriptions
                    </p>
                </div>

                <div className="w-96 px-4 py-12 pb-16 border border-black flex flex-col items-center justify-center hover:bg-gray-100" onClick={navigateToCertificateQuestion}>
                    <PiCertificateFill className="text-6xl" />
                    <p className="mt-4 font-semibold text-2xl">
                        Certificates & verification
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HelpCentre;
