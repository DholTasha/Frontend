import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'

const NavbarHome=()=>{
    return (
        <div className="navbar">
        <div className="container-fluid content-space-between">
            <Link to="/">
            <h2 className="navBrand p-4">Dhol-Tasha</h2>
            </Link>
            <div className="right d-flex">
        <Link to="/pathakLogin">
            <h2 className="about btn btn-primary m-2">Pathak</h2>
        </Link>
        <Link to="/customerlogin">
            <h2 className="about btn btn-primary m-2">Customer</h2>
        </Link>
            </div>
        </div>
    </div>
    )
}

export default NavbarHome