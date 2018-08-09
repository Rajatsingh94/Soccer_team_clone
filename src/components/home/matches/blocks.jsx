import React, { Component } from 'react';
import {firebaseMatch} from '../../../firebase';
import MatchBlock from '../../ui/matches_block';
import Slide from 'react-reveal';
class Block extends Component {

    state={
        matches:[]
    }
    
    firebaseLooper = (snapshot) =>{
        const data=[];
        snapshot.forEach((childsnapshot)=>{
            data.push({
                ...childsnapshot.val(),
                id: childsnapshot.key
            })
        });
        return data
    }

    componentDidMount(){
        firebaseMatch.limitToLast(6).once('value').then((snapshot)=>{
    
            const res = this.firebaseLooper(snapshot);
           this.setState({
               matches: res
           }) 
           
        })
    }

    showMatches = (matches) => (
        matches ? 
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                <div className="item">
                    <div className="wrapper">
                        <MatchBlock match={match}/>
                    </div>

                </div>
                </Slide>
            ))
            : null
    )

    

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Block;