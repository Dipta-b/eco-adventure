import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import SocialLogin from './SocialLogin';
import PasswordModalReset from '../components/passwordModalReset/passwordModalReset';


const Login = () => {
    const { signInUser, user, setUser } = useContext(AuthContext);
    const [toast, setToast] = useState(false)
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        signInUser(email, password)
            .then(result => {
                setUser(result.currentUser);
                setToast(true);
                e.target.reset();
                setTimeout(() => setToast(false), 3000);
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                alert('PLease enter the correct email & password');
            })

    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <PasswordModalReset></PasswordModalReset>                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here? Please<Link to="/auth/register"> Register</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            {toast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info">
                        <span>Login Successful</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Login;