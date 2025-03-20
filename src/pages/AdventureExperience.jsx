import React, { useEffect, useState } from 'react';
import Adventure from './Adventure';


const AdventureExperience = () => {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        fetch('/public/adventure.json')
            .then(res => res.json())
            .then(data => setAdventures(data))

    }, [])
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {
                    adventures.map(adventure =>
                        <Adventure key={adventure.id} adventure={adventure}></Adventure>)
                }
            </div>
        </div>
    );
};

export default AdventureExperience;