import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

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
    {
        imgSrc: "/signal-2024-12-05-002042_002.png",
        company: "Amazon",
        title: "AI Engineering",
        type: "Specialization",
        description:
            "Dive deep into artificial intelligence, including neural networks, deep learning, and reinforcement learning.",
    },
];

const PostLogin = () => {
    return (
        <main>
            <div className="mt-10 -mb-6 ml-24">
                <h1 className="text-2xl font-bold">Most popular</h1>
            </div>

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
                            <h1 className="mt-3 font-bold">{course.title}</h1>
                            <p className="mt-2">{course.description}</p>
                            <p className="text-gray-500 mt-4">{course.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default PostLogin;
