import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogoImdb } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

const CourseDetail = () => {
    const navigate = useNavigate();

    const enrollCourse = () => {
        navigate("/my-learning/course");
    };

    return (
        <main>
            <div className="pl-20 bg-blue-50 w-full pb-10">
                <img
                    src="/microsoft.svg"
                    alt="Mircosoft"
                    className="w-64 py-12"
                />

                <div>
                    <h1 className="text-4xl font-bold w-6/12 leading-snug">
                        Microsoft Project Management Professional Certificate
                    </h1>
                    <p className="text-md my-2 w-7/12">
                        Launch your career as a project manager. Build job-ready
                        skill for an in-demand career in project management in
                        as little as 4 months. No prior experience required to
                        get started.
                    </p>
                    <div className="flex items-center -ml-1">
                        <BiLogoImdb className="text-4xl" />
                        <span className="ml-2">
                            Instructor:{" "}
                            <span className="text-blue-800 underline cursor-pointer hover:text-blue-900">
                                Microsoft
                            </span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center mt-8">
                    <button
                        className="bg-blue-700 py-5 px-20 text-white font-semibold rounded-md hover:bg-blue-800"
                        onClick={enrollCourse}
                    >
                        Enroll course
                    </button>
                    <div className="ml-5 text-gray-500">
                        <span>
                            Try for Free: Enroll to start your 7-days full
                            access free trial
                        </span>
                        <br />
                        <span>Financial aid available</span>
                    </div>
                </div>

                <div className="text-gray-600 text-md my-3">
                    <strong>17,559</strong> already enrolled
                </div>
            </div>

            <div className="bg-white px-20 py-3">
                <div className="flex justify-between items-center text-center">
                    <div>
                        <span className="underline font-semibold">
                            13 courses series
                        </span>
                        <br />
                        <p className="w-[220px] text-gray-500">
                            Earn a career credential that demonstrates your
                            expertise
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
                                <span className="font-semibold mr-1">4.5</span>
                                <CiStar className="text-xl" />
                            </div>
                            <p className="text-gray-500">(6,820 reviews)</p>
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold">
                            Intermediate level
                        </span>
                        <br />
                        <p className="w-[220px] text-gray-500">
                            Recommended experience
                        </p>
                    </div>
                    <div>
                        <span className="font-semibold">Flexible schedule</span>
                        <br />
                        <p className="w-[220px] text-gray-500">
                            4 months, 10 hours a week Learn at your own space
                        </p>
                    </div>
                    <div>
                        <span className="font-semibold">
                            Build toward a degree
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CourseDetail;
