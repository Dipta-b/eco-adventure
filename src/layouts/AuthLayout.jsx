import React from 'react';
import Navbar from '../layout-components/Navbar';
import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
    return (
        // className="font-poppins bg-[#F3F3F3]"
        <div >
            <header className="py-3 w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;