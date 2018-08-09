import React from 'react';
import {Link} from 'react-router-dom';
import Block from './blocks';
const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
             <div  className="match">
             Matches
             </div>

           <Block />

            <div className="match">
                <Link to="/the_team">See More</Link> 
            </div>

            </div>
        </div>
    );
}; 

export default Matches;