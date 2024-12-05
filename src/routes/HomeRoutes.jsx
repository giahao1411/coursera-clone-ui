import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { EMAIL } from "../libs/constant";
import Home from "../components/Home/Home";
import PreLogin from "../components/Main/PreLogin";
import PostLogin from "../components/Main/PostLogin";
import Career from "../components/Main/Career";
import SearchResult from "../components/Main/SearchResult";

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
            </Route>
        </Routes>
    );
};

export default HomeRoutes;
