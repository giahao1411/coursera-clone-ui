import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import ProfileDropDown from "../Partials/ProfileDropDown";
import { useNavigate } from "react-router-dom";

const CertificateQuestion = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prevState) => !prevState);
    };

    const logout = () => {
        localStorage.removeItem("EMAIL");
        setIsProfileDropdownOpen(false);
    };

    const navigateToHelpCentre = () => {
        navigate("/help-centre");
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <header className="flex justify-between items-center p-6 border-b">
                <h1
                    className="text-3xl font-bold cursor-pointer text-blue-700"
                    onClick={navigateToHelpCentre}
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

            <div>
                <div className="flex justify-left items-center mt-10 px-40">
                    <PiCertificateFill className="text-7xl text-black" />
                    <div className="text-center pl-4">
                        <p className="font-semibold text-3xl">
                            Certificates & verification
                        </p>
                        <p className="text-lg">
                            How to get and share a Course Certificate
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-10">
                <div className=" px-40 py-2 mt-10 ml-4">
                    <ul>
                        <li className="font-semibold text-xl">
                            Course Certificates
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Course Certificates
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Get a Course Certificate
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Share your Coursera Certificates
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Solve problems with Course Certificates
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            ACE Credit Recommendations
                        </li>
                    </ul>
                </div>

                <div className="px-40 py-2 mt-10 ml-4">
                    <ul>
                        <li className="font-semibold text-xl">Verification</li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Verify your name
                        </li>
                        <li className="text-blue-500 hover:text-gray-700 hover:underline py-2">
                            Verify your ID
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CertificateQuestion;
