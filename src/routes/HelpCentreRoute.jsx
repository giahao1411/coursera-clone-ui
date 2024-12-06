import React from "react";
import { Route } from "react-router-dom";
import HelpCentre from "../components/HelpCentre/HelpCentre";
import CertificateQuestion from "../components/HelpCentre/CertificateQuestion";

const HelpCentreRoute = [
    <Route key="help-centre" path="/help-centre" element={<HelpCentre />} />,

    <Route
        key="certificate-question"
        path="/help-centre/certificate-question"
        element={<CertificateQuestion />} />
];

export default HelpCentreRoute;
