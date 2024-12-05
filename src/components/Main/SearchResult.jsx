import React from "react";
import { useLocation } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";

const subjects = [
    { name: "Software Engineer", count: 1170 },
    { name: "Computer Science", count: 420 },
    { name: "Business", count: 300 },
];

const languages = [
    { name: "English", count: 1200 },
    { name: "Vietnamese", count: 800 },
    { name: "Spanish", count: 352 },
];

const courseData = [
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        company: "Google",
        title: "Data Analyze",
        type: "Professional Certificate",
        description:
            "Learn how to collect and analyze data to make informed decisions and improve business outcomes.",
    },
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        company: "Microsoft",
        title: "Data Science",
        type: "Diploma",
        description:
            "Acquire the skills to analyze large data sets, make data-driven decisions, and apply machine learning algorithms.",
    },
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        company: "IBM",
        title: "Machine Learning",
        type: "Professional Certificate",
        description:
            "Understand the fundamentals of machine learning, build predictive models, and apply them to real-world.",
    },
];

const SearchResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    return (
        <main>
            <div className="flex items-start justify-between mt-10">
                {/* Left section (filter) */}
                <div className="w-1/4 px-20">
                    <h3 className="font-bold text-lg">Filter by</h3>
                    <div className="mt-4">
                        <h4 className="font-semibold text-md">Subject</h4>
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="flex items-center py-1 ml-1 hover:text-gray-600 cursor-pointer"
                            >
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="transform scale-150 mr-2"
                                    />
                                    <span>
                                        {subject.name} ({subject.count})
                                    </span>
                                </label>
                            </div>
                        ))}
                        <p className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-500">
                            Show 6 more
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold text-md">Language</h4>
                        {languages.map((subject, index) => (
                            <div
                                key={index}
                                className="flex items-center py-1 ml-1 hover:text-gray-600 cursor-pointer"
                            >
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="transform scale-150 mr-2"
                                    />
                                    <span>
                                        {subject.name} ({subject.count})
                                    </span>
                                </label>
                            </div>
                        ))}
                        <p className="text-sm text-gray-400 underline cursor-pointer hover:text-gray-500">
                            Show 23 more
                        </p>
                    </div>
                </div>

                {/* Right section (result) */}
                <div className="w-3/4 px-5">
                    <h1 className="text-xl font-bold ml-12">
                        Result for"{searchQuery}"
                    </h1>

                    <div className="flex justify-center items-center mt-8 mb-24">
                        {courseData.map((course, index) => (
                            <div
                                key={index}
                                className="mx-3 w-80 bg-white max-w-xl border rounded-md py-5 px-4 flex flex-col cursor-pointer hover:bg-gray-50"
                            >
                                <img
                                    src={course.imgSrc}
                                    alt="Course"
                                    className="w-72 h-32 object-cover rounded-lg"
                                />
                                <div className="flex items-center space-x-3 mt-2">
                                    <BiSolidUserCircle className="text-4xl" />
                                    <p>{course.company}</p>
                                </div>
                                <div className="text-left flex-grow mt-3">
                                    <h1 className="mt-3 font-bold">
                                        {course.title}
                                    </h1>
                                    <p className="mt-2">{course.description}</p>
                                    <p className="text-gray-500 mt-4">
                                        {course.type}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchResult;
