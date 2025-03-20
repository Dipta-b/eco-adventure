import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
    const { createUser, user, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                e.target.reset();
                setUser(currentUser);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .error(err => {
                        console.log(err.code)
                    })
            })
            .catch(error => {
                alert('PLease enter the correct email & password');
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col p-3">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Already have Account? Please <Link to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;