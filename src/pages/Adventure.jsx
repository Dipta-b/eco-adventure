import React from 'react';
import { Link } from 'react-router-dom';

const Adventure = ({ adventure }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{adventure.adventure_title}</h2>
                {/* <p className='p-2'>{adventure.eco_friendly_features}</p> */}
                <ul className="text-center  mt-2">
                    {adventure.eco_friendly_features.map(feature => <li className="text-gray-600" key={feature.id}>{feature}</li>)}
                </ul>
                <div className="card-actions">
                    <Link className="btn btn-secondary" to={`/auth/adventure/${adventure.id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Adventure;