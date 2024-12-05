import React from "react";
import { Route } from "react-router-dom";
import HelpCentre from "../components/HelpCentre/HelpCentre";

const HelpCentreRoute = [
    <Route key="help-centre" path="/help-centre" element={<HelpCentre />} />,
];

export default HelpCentreRoute;
