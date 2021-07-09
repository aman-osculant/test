import React from 'react';
import Navbar from './Header/Navbar';

import './index.css';

import Blogs from './Blogs';

import Footer from './Header/Footer';

const Blog = () =>{
    return(
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row" style={{height:"40rem", backgroundColor:"#24375B"}}>
                
                <div className="col-md-12">
                    <p className="firstfont">Smart marketing<br/> starts here</p><br/>
                </div>
                
                <div className="col-md-12">
                    <p className="fonts">Join over 150,000 marketing managers who get our best digital marketing insights,<br/> strategies and tips delivered straight to their inbox.</p>
                </div>

                <div className="col-md-8 offset-md-4" style={{marginTop:"-100px"}}>
                    <div style={{display:"flex"}}>
                    <input type="text" className="form" placeholder="Enter Email"/>
                    <button className="btn btn-danger" style={{borderRadius:"20px", marginLeft:"20px"}}>Subscribe</button>
                    </div>
                </div>

                
            
            </div>
        </div>

        <Blogs/>


        <div className="container-fluid">
            <div className="row mid-section" style={{backgroundColor:"darkblue", marginTop:"20px"}}>
                <div className="col-md-6 mid-s">
                    <p className="firstfont1">Get in touch/ also schedule a call/meet</p>
                    <p style={{color:"white",fontSize:"1.2rem"}}>Schedule a call or meeting with our digital marketing expert for FREE consultation.</p>
                    <br/>
                    <button className="btn btn-danger" style={{borderRadius:"20px"}}>Schedule</button>
                </div>

                <div className="col-md-6">
                    <div className="card" style={{padding:"50px", marginTop:"50px", backgroundColor:"transparent",  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border:"1px solid lightgray", color:"white" }}>
                        <p style={{fontSize:"1.5rem", textAlign:"center"}}>If you want us to prepare a digital marketing scope for your business, please fill in the necessary information required for us to proceed.</p>
                        
                        <label>Full Name</label>
                        <input type="text" className="form-control"/>
                        <label>Service</label>
                        <input type="text" className="form-control"/>
                        <label>Date</label>
                        <input type="date" className="form-control"/>
                        <label>Timing</label>
                        <input type="Time" className="form-control"/>
                        <br/>
                        <button className="btn btn-danger btn-sm" style={{borderRadius:"20px"}}>Schedule</button>
                    </div>
                </div>

            </div>
        </div>

        <Footer/>

        </>
    );
}

export default Blog;