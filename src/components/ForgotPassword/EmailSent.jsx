import React from "react";
import { Link } from "react-router-dom";

const EmailSent = () => {
    return (
        <div className="login-form max-w-lg mx-auto border-2 p-10 mt-20">
            <h2 className="text-center text-3xl text-black-500 mt-5 mb-5">
                Email has been sent
            </h2>

            <p className="text-center text-gray-500 mt-8 mb-8">
                Please check your email inbox for a password recovery link.
                Don't forget to check your spam folder.
            </p>

            <p className="text-center text-gray-400 mt-8">
                Back to{" "}
                <Link to="/account/login" className="text-blue-500 underline">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default EmailSent;
