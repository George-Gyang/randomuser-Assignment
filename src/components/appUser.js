import React from "react";
import More from "./dashboard";
import { Routes, Route, NavLink, } from "react-router-dom"
import "../assets/styles/Users.css"

// import blank_img from '../public/images/blank_pics.png'

const Show = ({ src, fullName, nickName, status, location, occupation }) => {

    return (
        <>
            <div className="show-page-img">
                <img src={`${src}`} className="show-img" alt="user" />
            </div>
            <h2>name:{fullName}</h2>
            <h5>occupation:{occupation} </h5>
            <h6>location:{location} </h6>
            <NavLink to="/" style={({ isActive }) => isActive ? { color: "green" } : { color: "blue" }}>show less...</NavLink>
            <NavLink to="/user" style={({ isActive }) => isActive ? { color: "green" } : { color: "blue" }}>Full profile</NavLink>
        </>
    )
}

const AppUsers = ({ initialUsers }) => {
    return (
        <div className="user-container">
            <div>
                {initialUsers.map(oneUser => (
                    <Routes>
                        <Route path="/" element={<Show key={oneUser.id} {...oneUser} />} />
                        <Route path="/user" element={<More key={oneUser.id} {...oneUser} />} />
                    </Routes>
                )
                )}

            </div>
        </div>
    )
}

export default AppUsers;