import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import EmailSent from "../components/ForgotPassword/EmailSent";
import CheckInbox from "../components/ForgotPassword/CheckInbox";

const AccountRoutes = [
    <Route key="account-login" path="/account/login" element={<Login />} />,
    <Route key="account-signup" path="/account/signup" element={<Signup />} />,
    <Route
        key="account-forgot-password"
        path="/account/forgot-password"
        element={<ForgotPassword />}
    />,
    <Route
        key="account-email-sent"
        path="/account/email-sent"
        element={<EmailSent />}
    />,
    <Route
        key="account-check-inbox"
        path="/account/check-inbox"
        element={<CheckInbox />}
    />,
];

export default AccountRoutes;
