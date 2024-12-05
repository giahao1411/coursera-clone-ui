import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AccountRoutes from "./routes/AccountRoutes";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
    return (
        <Router>
            <Routes>
                {AccountRoutes}
                <Route path="/*" element={<HomeRoutes />} />
            </Routes>
        </Router>
    );
}

export default App;
