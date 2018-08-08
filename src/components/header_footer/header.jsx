import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import {CityLogo} from '../ui/icons'; 

class Header extends Component {
    render() {
        return (
           <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#B22222',
                    boxShadow:'none',
                    padding:'10px 0',
                    borderBottom:'2px solid #00285e'
                }}
           >
                <Toolbar styles={{display:'flex'}}>
                        <div style={{flexGrow:1}}>
                            <div className="header_logo">
                                <CityLogo 
                                    link={true}
                                    linkto='/'
                                    width="70px"
                                    height="70px"
                                />
                            </div>
                        </div>
                    
                    <Link to="/the_team">
                        <Button color="inherit">The Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit">The Matches</Button>
                    </Link>

                </Toolbar>
           </AppBar>
        );
    }
}

export default Header;