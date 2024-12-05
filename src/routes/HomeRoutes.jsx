import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { EMAIL } from "../libs/constant";
import Home from "../components/Home/Home";
import PreLogin from "../components/Main/PreLogin";
import PostLogin from "../components/Main/PostLogin";
import Career from "../components/Main/Career";
import SearchResult from "../components/Main/SearchResult";
import MyLearning from "../components/Main/MyLearning";
import UserProfile from "../components/Main/UserProfile";
import UserSetting from "../components/Main/UserSetting";
import Purchases from "../components/Main/Purchases";
import Checkout from "../components/Main/Checkout";
import CourseDetail from "../components/Main/CourseDetail";

const HomeRoutes = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem(EMAIL));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route
                    index
                    element={user === "" ? <PreLogin /> : <PostLogin />}
                />
                <Route path="/careers" element={<Career />} />
                <Route path="/search-result" element={<SearchResult />} />
                <Route path="/my-learning" element={<MyLearning />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/setting" element={<UserSetting />} />
                <Route path="/purchases" element={<Purchases />} />
                <Route path="/check-out" element={<Checkout />} />
                <Route path="/course-detail" element={<CourseDetail />} />
            </Route>
        </Routes>
    );
};

export default HomeRoutes;
