import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Home;
