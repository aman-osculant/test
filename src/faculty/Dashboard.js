import React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';

class Dashboard extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <div className="container">
                <div className="card" style={{margin:"20px"}}>
                    <div className="card-body">
                        <h3>No. of Course: 3</h3>
                    </div>
                </div>

                <div className="card" style={{margin:"20px"}}>
                    <div className="card-body">
                        <h3>No. of Student: 1</h3>
                    </div>
                </div>


            </div>
            
            </>
        )

    }
}

export default Dashboard;
