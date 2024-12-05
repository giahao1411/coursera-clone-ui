import React from "react";

const LearnCourse = () => {
    return (
        <div className="flex justify-center mt-20">
            <div className="flex space-x-8 w-2/3">
                <div className="w-1/3">
                    <div className="text-xl font-bold mb-4">
                        Design UX/UI
                    </div>
                    <ul>
                        <li className="flex items-center mb-4">
                            <input
                                id="part1-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="part1-checkbox"
                                className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                            >
                                Part 1
                            </label>
                        </li>
                        <li className="flex items-center mb-4">
                            <input
                                id="part2-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="part2-checkbox"
                                className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                            >
                                Part 2
                            </label>
                        </li>
                        <li className="flex items-center mb-4">
                            <input
                                id="part3-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="part3-checkbox"
                                className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                            >
                                Part 3
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="w-4/6">
                    <div className="flex flex-col">
                        <video
                            width="100%"
                            controls
                            className="rounded-lg shadow-md mb-4"
                        >
                            <source src="your-video-url.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="text-left">
                            <div className="text-black text-lg font-semibold">Description</div>
                            <div className="text-black text-lg font-regular">This mini-course is intended to for you to demonstrate foundational Python skills for working with data. This course primarily involves completing a project in which you will assume the role of a Data Scientist or a Data Analyst and be provided with a real-world data set and a real-world inspired scenario to identify patterns and trends.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnCourse;
