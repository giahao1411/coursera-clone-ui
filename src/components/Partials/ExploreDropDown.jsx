import React from "react";

const ExploreDropDown = () => {
    return (
        <div className="absolute w-64 bg-white border border-gray-300 rounded-md shadow-md mt-2">
            <ul>
                <li className="px-4 py-2 text-xl font-bold">Subjects</li>
                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    Data Science
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    Business
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    Computer Science
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    Health
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    Social Science
                </li>
            </ul>
        </div>
    );
};

export default ExploreDropDown;
