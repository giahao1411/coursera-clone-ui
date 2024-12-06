import React from "react";
import { Route } from "react-router-dom";
import HelpCentre from "../components/HelpCentre/HelpCentre";
import CertificateQuestion from "../components/HelpCentre/CertificateQuestion";
import AccountQuestion from "../components/HelpCentre/AccountQuestion";
import PaymentQuestion from "../components/HelpCentre/PaymentQuestion";

const HelpCentreRoute = [
    <Route key="help-centre" path="/help-centre" element={<HelpCentre />} />,

    <Route
        key="certificate-question"
        path="/help-centre/certificate-and-verification"
        element={<CertificateQuestion />}
    />,
    <Route
        key="account-question"
        path="/help-centre/account-and-notification"
        element={<AccountQuestion />}
    />,
    <Route
        key="payment-question"
        path="/help-centre/payment-and-subscriptions"
        element={<PaymentQuestion />}
    />,
];

export default HelpCentreRoute;
