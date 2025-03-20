import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle, signWithGitHub, logOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate(); // Moved to the top level
    const location = useLocation(); // Moved to the top level
    console.log(location)

    // const handleGoogleSignIn = async () => {
    //     try {
    //         const result = await signInWithGoogle();
    //         navigate(location.state ? location.state : <h2>Hello</h2>);
    //     } catch (error) {
    //         console.error("Google Sign-In Error:", error);
    //     }
    // };

    // const handleGoogleSignIn = (e) => {

    //     signInWithGoogle()

    //         .then(result => {
    //             setUser(result.user)

    //             // ein jaygay location.state null e thake always home page ae state hocche na faka theke jacche
    //             navigate(location?.state ? location.state : "/")
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : "/")
                }
            })
    }

    // handleLogOut


    return (
        <div className='divider'>
            <div className="flex justify-around">
                <button onClick={() => handleSocialLogin(signInWithGoogle)} className='btn btn-primary btn-sm btn-outline'>
                    Google
                </button>
            </div>
            <div className="">
                <button onClick={() => handleSocialLogin(signWithGitHub)} className='btn btn-secondary btn-sm btn-outline'>
                    GitHub
                </button>
            </div>
            <div className="">
                <button onClick={logOut} className='btn btn-neutral btn-sm btn-outline'>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
