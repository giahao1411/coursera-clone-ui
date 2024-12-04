import React from "react";

const PreLogin = () => {
    return (
        <main className="flex flex-col md:flex-row items-center justify-between px-4 md:py-24 bg-gray-50">
            {/* Left section */}
            <div className="flex-1 text-center md:text-left mx-20">
                <h1 className="text-4xl md:text-7xl font-bold text-black leading-tight">
                    Learn without limits
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                    Start, switch, or advance your career with more than 7,000
                    courses, Professional Certificates, and degrees from
                    world-class universities and companies.
                </p>
                <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                    Join for Free
                </button>
            </div>

            {/* Right section */}
            <div className="mt-8 md:mt-0 md:w-1/3 mx-20">
                <img
                    src="/signal-2024-12-05-002042_002.png"
                    alt="logo"
                    className="w-96"
                />
            </div>
        </main>
    );
};

export default PreLogin;
