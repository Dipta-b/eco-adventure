import React from 'react';
import Navbar from '../layout-components/Navbar';
import HomePage from '../layout-components/HomePage';
import { Outlet, useLocation } from 'react-router-dom';




const HomeLayouts = () => {
    const location = useLocation();

    return (
        <div className='w-11/12 mx-auto p-2'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <HomePage></HomePage>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default HomeLayouts;