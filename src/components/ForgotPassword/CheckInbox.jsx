import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { EMAIL } from "../../libs/constant";

const CheckInbox = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem(EMAIL));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className="login-form max-w-md mx-auto border-2 p-10 mt-20">
            <h2 className="text-center text-3xl text-black-500 mt-5 mb-5">
                Check your inbox
            </h2>

            <div className="text-center text-gray-600 mt-8 mb-8">
                <p>We mailed you an login link to </p>
                <strong className="text-gray-800">
                    {user.email ? user.email : ""}.
                </strong>
                <p>The link will expire shortly.</p>
            </div>

            <button
                type="button"
                className="block mx-auto border border-blue-600 bg-white-600 text-blue-600 py-2 px-8 rounded-md hover:text-white hover:bg-blue-700"
            >
                Re-send email
            </button>

            <div className="text-center">
                <p className="text-gray-400 mt-8">
                    Can't find you link? Check your spam folder.{" "}
                </p>
                <div className="mt-5 flex items-center justify-center space-x-2">
                    <BsArrowLeft className="text-gray-500" />
                    <Link
                        to="/account/forgot-password"
                        className="text-blue-500 underline"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckInbox;
