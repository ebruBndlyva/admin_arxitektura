import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import icon from "../../assets/icon.avif"
function Navbar() {
  return (
    <div className='navbar'>
      <h2>  POS(Point of Sales) v3.0</h2>
      <div className="navbar-right">
        <span className='time'>11 : 13 : 31 AM</span>
        <span><IoIosNotifications /></span>
        <div className="user-info">
          <span className='user-name'>Admin</span>
     
            <img src={icon} alt="user avatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar