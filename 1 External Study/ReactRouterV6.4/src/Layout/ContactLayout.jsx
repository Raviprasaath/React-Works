import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ContactLayout = () => {
    const styleContact = ({isActive}) => {
        return {
            color: isActive?'red':'blue',
            backgroundColor: isActive?'lightgreen':"yellow"
        }
    }
  return (
    <>
    <div className="m-4">
        Contact
    </div>
    <div className="flex gap-4">
        <div>
            <NavLink style={styleContact} className='m-2 bg-yellow-300 p-2' to='mail'>Mail US</NavLink>
            <NavLink style={styleContact} className='m-2 bg-yellow-300 p-2' to='phone'>Phone Number</NavLink>
        </div>
        <Outlet />
    </div>
    </>
  );
};

export default ContactLayout;
