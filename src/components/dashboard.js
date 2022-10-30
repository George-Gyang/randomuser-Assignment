import React from "react";
import "../assets/styles/dashboard.css"
import { NavLink } from "react-router-dom"

function More({ src, fullName, nickName, status, location, occupation, bio }) {

    console.log(`src`)
    return (
        <section className="more">
            <div>
                <div>
                    <div className="image-container">
                        <img src={`${src}`} className="user-image" alt="user" />
                    </div>
                    <h2>name: {fullName}</h2>
                    <h3>Nick Name: {nickName}</h3>
                    <h3>status: {status} </h3>
                    <h5>occupation: {occupation}</h5>
                    <h6>location: {location} </h6>
                    <h3 className="bioTag">Bio:</h3>
                    <p className="bio">{bio} </p>

                    <NavLink to="/user" style={({ isActive }) => isActive ? { color: "green" } : { color: "blue" }}>Full profile</NavLink>
                    <NavLink to="/" style={({ isActive }) => isActive ? { color: "green" } : { color: "blue" }}>show less...</NavLink>
                </div>
            </div>
        </section>
    )
}

export default More;