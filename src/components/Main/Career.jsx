import React from "react";

const courseDetails = [
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        title: "Data Analyze",
        description:
            "Collect, organize and transform data to make informed decisions",
        salary: "$90,500",
        jobsAvailable: "82,489",
    },
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        title: "Data Science",
        description:
            "Build predictive models and analyze large datasets to extract insights.",
        salary: "$100,000",
        jobsAvailable: "50,000",
    },
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        title: "Machine Learning",
        description:
            "Develop to enable machines to improve through experience.",
        salary: "$120,000",
        jobsAvailable: "30,000",
    },
];

const Career = () => {
    return (
        <main>
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:py-24 bg-gray-50 -mt-20">
                {/* Left section */}
                <div className="text-center md:text-left mx-20">
                    <h1 className="text-4xl md:text-4xl font-bold text-black">
                        Launch your new career with a Professional Certificate
                        on Coursera
                    </h1>
                    <p className="mt-10 text-md text-gray-600 max-w-2xl md:mx-0">
                        Professional Certificates offer flexible, online
                        training designed to get your job-ready for high growth
                        fields.
                    </p>
                    <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                        Explore career
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
            </div>

            <div className="bg-gray-200 text-center py-5">
                <h2 className="text-xl font-bold">
                    Take the first step toward your new career
                </h2>
                <h3 className="text-md">
                    Get professional-level training and earn a credential
                    recognized by leading companies
                </h3>

                <div className="flex justify-center items-center mt-10 pb-10">
                    {courseDetails.map((course, index) => (
                        <div
                            key={index}
                            className="mx-3 bg-white max-w-xl border rounded-md py-5 px-3"
                        >
                            <img
                                src={course.imgSrc}
                                alt="Course"
                                className="w-64 h-32 object-cover"
                            />
                            <div className="text-left">
                                <h1 className="mt-3 font-bold">
                                    {course.title}
                                </h1>
                                <p className="w-64">{course.description}</p>

                                <div className="flex items-center my-4">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <p>
                                    <strong>{course.salary}</strong> median
                                    salary
                                </p>
                                <p>
                                    <strong>{course.jobsAvailable}</strong> jobs
                                    available
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Career;
