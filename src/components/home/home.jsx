import React from 'react';
import Featured from './featured/featured';
import Matches from './matches/index';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured /> 
            <Matches />           
        </div>
    );
};

export default Home;