import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AccountRoutes from "./routes/AccountRoutes";
import HomeRoutes from "./routes/HomeRoutes";
import HelpCentreRoute from "./routes/HelpCentreRoute.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {AccountRoutes}
                <Route path="/*" element={<HomeRoutes />} />
                {HelpCentreRoute}
            </Routes>
        </Router>
    );
}

export default App;
