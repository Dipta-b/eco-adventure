import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const PasswordModalReset = () => {
    const { resetPass } = useContext(AuthContext);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPass(email)
            .then(result => {
                console.log(result.user);

                document.getElementById('my_modal_2').close();
            })
            .catch(error => {
                console.error(error);

            });
    };

    const handleModalOpen = () => {
        document.getElementById('my_modal_2').showModal();
    };

    const handleModalClose = () => {
        document.getElementById('my_modal_2').close();
    };

    return (
        <div>
            <label className="label">
                <a
                    onClick={handleModalOpen}
                    className="label-text-alt link link-hover"
                >
                    Forgot password?
                </a>
            </label>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        /> <br />
                        <button className="mt-2 btn btn-outline" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div method="dialog" className="modal-backdrop">
                    <button onClick={handleModalClose}>Close</button>
                </div>
            </dialog>
        </div>
    );
};

export default PasswordModalReset;
