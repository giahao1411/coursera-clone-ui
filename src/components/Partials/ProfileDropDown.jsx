import React from "react";
import { NavLink } from "react-router-dom";

const ProfileDropDown = ({ logout }) => {
    return (
        <div className="absolute top-16 w-38 right-10 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <NavLink to="/purchases">My purchases</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <NavLink to="/setting">Settings</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <NavLink to="/help-centre">Help centre</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <NavLink to="/account/login" onClick={logout}>
                        Log out
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropDown;
