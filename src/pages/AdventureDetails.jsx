import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AdventureDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="/african_safari.jpg"
                    alt="African Safari"
                    className="w-full max-w-sm rounded-lg shadow-2xl"
                />
                <div className="p-3">
                    <h1 className="text-5xl font-bold">{data?.adventure_title}</h1>
                    <p className="py-4 text-lg"></p>
                    <p className="text-xl font-semibold text-primary"></p>
                    <p className="text-lg">{data?.booking_availability}</p>
                    <p className="text-md font-semibold">
                        {data?.category_name}, {data?.duration}, Max group members: {data?.max_group_size}
                    </p>
                    <p className="text-md font-semibold">
                        Location: {data?.location}
                    </p>

                    {data?.eco_friendly_features?.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-lg font-bold">Eco Friendly Features</h3>
                            <ul className="list-disc list-inside">
                                {data.eco_friendly_features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data?.included_items?.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-lg font-bold">Included Items</h3>
                            <ul className="list-disc list-inside">
                                {data.included_items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <p className="text-lg font-bold">A Short Description: {data?.short_description}</p>
                    <p className="text-md font-semibold">Availability: {data?.booking_availability}</p>
                    <br />
                    {/* <Link to={`/auth/adventures/${data.id}`} className="btn btn-primary mt-6">
                        Back to Adventure
                    </Link> */}

                    <button className="btn btn-primary mt-6" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;


