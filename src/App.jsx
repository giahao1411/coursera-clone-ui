import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AccountRoutes from "./routes/AccountRoutes";

function App() {
    return (
        <Router>
            <Routes>{AccountRoutes}</Routes>
        </Router>
    );
}

export default App;
