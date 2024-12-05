import React, { useState } from "react";

// const inProgressCourses = [];
// const completedCourses = [];

const inProgressCourses = [
    {
        name: "JavaScript for Beginners",
        type: "Certificate",
    },
    {
        name: "React Basics",
        type: "Certificate",
    },
];

const completedCourses = [
    {
        name: "Machine Learning",
        type: "Certificate",
    },
    {
        name: "Data Analytics",
        type: "Specialization",
    },
    {
        name: "Software Engineering",
        type: "Certificate",
    },
];

const MyLearning = () => {
    const [activeTab, setActiveTab] = useState("inProgress");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6">My Learning</h1>
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => handleTabClick("inProgress")}
                    className={`px-4 py-1 rounded-3xl text-lg ${
                        activeTab === "inProgress"
                            ? "bg-gray-500 text-white"
                            : "bg-white border border-black text-black hover:bg-blue-500 hover:text-white"
                    }`}
                >
                    In Progress
                </button>
                <button
                    onClick={() => handleTabClick("completed")}
                    className={`px-4 py-1 rounded-3xl text-lg ${
                        activeTab === "completed"
                            ? "bg-gray-500 text-white"
                            : "bg-white border border-black text-black hover:bg-blue-500 hover:text-white"
                    }`}
                >
                    Completed
                </button>
            </div>

            <div className="bg-white rounded-lg">
                {activeTab === "inProgress" ? (
                    inProgressCourses.length === 0 ? (
                        <p className="text-gray-600 pb-40">
                            You will find your in-progress courses here.
                        </p>
                    ) : (
                        <div
                            className={`grid grid-cols-2 gap-x-10 gap-y-5 justify-items-start ml-10 ${
                                inProgressCourses.length <= 2 ? "pb-56" : ""
                            }`}
                        >
                            {inProgressCourses.map((course, index) => (
                                <div
                                    key={index}
                                    className="flex justify-start w-full h-44 border border-gray-300 p-5 rounded-xl hover:bg-gray-100"
                                >
                                    <img
                                        src="/signal-2024-12-05-002042_002.png"
                                        alt="Course"
                                        className="w-56 rounded-xl"
                                    />
                                    <div className="w-64 flex flex-col ml-7 font-semibold">
                                        <h2 className="mb-3">{course.name}</h2>
                                        <p className="text-gray-500">
                                            {course.type}
                                        </p>
                                    </div>
                                    <button className="mt-auto w-64 py-1 bg-gray-500 text-white rounded-2xl">
                                        Continue
                                    </button>
                                </div>
                            ))}
                        </div>
                    )
                ) : completedCourses.length === 0 ? (
                    <p className="text-gray-600 pb-40">
                        You don't have any completed courses yet.
                    </p>
                ) : (
                    <div
                        className={`grid grid-cols-2 gap-x-10 gap-y-5 justify-items-start ml-10 ${
                            completedCourses.length <= 2 ? "pb-56" : ""
                        }`}
                    >
                        {completedCourses.map((course, index) => (
                            <div
                                key={index}
                                className="flex justify-start w-full h-44 border border-gray-300 p-5 rounded-xl hover:bg-gray-100"
                            >
                                <img
                                    src="/signal-2024-12-05-002042_002.png"
                                    alt="Course"
                                    className="w-56 rounded-xl"
                                />
                                <div className="w-64 flex flex-col ml-7 font-semibold">
                                    <h2 className="mb-3">{course.name}</h2>
                                    <p className="text-gray-500">
                                        {course.type}
                                    </p>
                                </div>
                                <button className="mt-auto w-60 py-1 bg-gray-500 text-white rounded-2xl">
                                    View certificate
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyLearning;
