import React from 'react'
import { NavLink } from "react-router";
import { FaAppStore, FaChartLine, FaHome, FaUsers, FaUserSecret } from "react-icons/fa";
import { BsFillCartCheckFill } from 'react-icons/bs';
function Sidebar() {
    return (
        <div className='sidebar'>
            <h1>POS SYSTEM</h1>
            <ul>
                <li>
                    <NavLink to={""} className={({ isActive }) => isActive ? "navlink active" : "navlink"} >   <FaHome /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/stores"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <FaAppStore /> Stores</NavLink>
                </li>
                <li>
                    <NavLink to={"/users"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                     <FaUsers /> Users
                     </NavLink>
                </li>
                <li>
                    <NavLink to={"suppliers"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}><FaUserSecret /> Suppliers</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}> <FaChartLine /> Products</NavLink>
                </li>
                <li>
                    <NavLink to={"/orders"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}> <BsFillCartCheckFill /> Orders</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar