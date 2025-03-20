import React from 'react';
import Banner from '../pages/Banner';
import AdventureExperience from '../pages/AdventureExperience';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AdventureExperience></AdventureExperience>
        </div>
    );
};

export default HomePage;