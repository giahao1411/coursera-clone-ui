import React from "react";
import { BiLogoImdb } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const courseData = [
    {
        courseTitle: "Google Data Analytics",
        company: "Google",
    },
    {
        courseTitle: "Data Science by IBM",
        company: "IBM",
    },
    {
        courseTitle: "Machine Learning",
        company: "Coursera",
    },
];

const search = [
    { content: "ai" },
    { content: "machine learning" },
    { content: "data analytics" },
];

const SearchBoxDropDown = () => {
    return (
        <div className="absolute top-10 w-96 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
            <ul>
                <li className="px-4 py-2 font-bold text-lg">
                    Most Popular Specializations
                </li>
                {courseData.map((course, index) => (
                    <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                        <div className="flex items-center">
                            <BiLogoImdb className="text-5xl" />
                            <div className="flex flex-col ml-5">
                                <p>{course.courseTitle}</p>
                                <p className="text-gray-400">
                                    {course.courseTitle}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
                <li className="px-4 py-1 font-bold text-lg">Recently</li>
                {search.map((item, index) => (
                    <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                        <div className="flex items-center">
                            <CiSearch className="text-xl text-blue-500" />
                            <p className="ml-5">{item.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBoxDropDown;
