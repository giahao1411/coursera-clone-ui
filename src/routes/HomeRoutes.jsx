import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import PreLogin from "../components/Main/PreLogin";

const HomeRoutes = [
    <Route key="home" path="/" element={<Home />}>
        <Route key="home" index element={<PreLogin />} />
    </Route>,
];

export default HomeRoutes;
