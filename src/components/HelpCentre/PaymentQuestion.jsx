import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropDown from "../Partials/ProfileDropDown";
import { EMAIL } from "../../libs/constant";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const PaymentQuestion = () => {
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
                        Payments & subscriptions
                    </h1>
                    <p className="text-lg mt-2">
                        Help with payments, subscription options, and Financial
                        Aid
                    </p>
                </div>

                <div className="flex justify-between">
                    <div className="pt-5 pl-10">
                        <h1 className="text-xl font-semibold">Payments</h1>
                        <div className="text-blue-500 ">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Payments on Coursera
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Pay for a course or Specialization
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Accepted payment methods
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Save your payment information
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Save your payment information
                            </p>
                        </div>
                    </div>

                    <div className="pt-5 pr-40">
                        <h1 className="text-xl font-semibold">Subscriptions</h1>
                        <div className="text-blue-500">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Coursera subscriptions
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Coursera Plus
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                What content is included in Coursera Plus?
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Change your subscription plan
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Cancel a subscription
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-5">
                    <div className="pt-5 pl-10">
                        <h1 className="text-xl font-semibold">
                            Promotions & free trials
                        </h1>
                        <div className="text-blue-500">
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Free trials for subscriptions
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Cancel a free trial
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Grow with Google Scholarships for Business
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Google Cloud promotion
                            </p>
                            <p className="hover:text-gray-700 hover:underline py-2">
                                Coursera Referral Program Terms & Conditions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentQuestion;
