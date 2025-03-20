import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Navbar = () => {
    const { user: currentUser, logOut } = useContext(AuthContext);

    console.log(currentUser)

    return (
        <div className="navbar bg-base-100 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">

                <a className="btn btn-ghost text-xl">ECO ADVENTURE</a>

            </div>
            <div className='flex justify-center items-center gap-2 '>
                <div className=" gap-2">
                    <Link to="/" className="btn btn-sm">Home</Link>

                    {
                        currentUser && currentUser?.email ? <button className='btn btn-sm' onClick={logOut}>Logout</button> : <Link to="/auth/login" className="btn btn-sm">Login</Link>
                    }

                </div>
                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile Menu"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
