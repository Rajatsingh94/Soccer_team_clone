import React from 'react';
import {Link} from 'react-router-dom';

const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div class="container">
             <div  className="match">
             Matches
             </div>

            BLOCK

            <div class="match">
                <Link to="/the_team">See More</Link> 
            </div>

            </div>
        </div>
    );
}; 

export default Matches;