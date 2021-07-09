import React from 'react';
import Logo from '../blog-logo.png';

import '../index.css';

const Navbar = ()=>{
    return(
    <>
    <div className="container-fluid">
        <div className="web1">
        <div className="row " style={{marginTop:"20px"}}>
            <div className="col-md-1 offset-md-1">
                <img src={Logo}/>
            </div>
            <div className="col-md-8 offset-md-1">
                <div style={{display:"flex"}} >
                    <p style={{margin:"15px",fontWeight:"bold", textTransform:"uppercase"}} >Bloggin Tools</p>
                    <p style={{margin:"15px",fontWeight:"bold", textTransform:"uppercase"}} >Google</p>
                    <p style={{margin:"15px",fontWeight:"bold", textTransform:"uppercase"}} >Internet Marketing</p>
                    <p style={{margin:"15px",fontWeight:"bold", textTransform:"uppercase"}} >Advertise With Us</p>

                    <button className="btn btn-danger"  style={{margin:"15px",borderRadius:"15px" }}>Request Free Quote</button>
                    <button className="btn btn-Success" style={{margin:"15px",borderRadius:"15px" }}>Contact Us</button>
                </div>
            </div>
        </div>
        </div>

        <div className="mobile1">
        <div className="row mobile1" style={{marginTop:"20px",height:"60px"}}>
            <div className="col-12" style={{position:"relative"}}>
                <img src={Logo} style={{marginBottom:"10px"}} style={{position:"absolute", left:"10px"}}/>

                <i className="fa fa-bars" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{position:"absolute", right:"20px",top:"10px"}}></i>
               
            </div>
           
        </div>
        <div className="collapse" id="collapseExample">
             <div className="">
                    <p style={{margin:"15px",fontWeight:"600", textTransform:"uppercase"}} >Bloggin Tools</p>
                    <p style={{margin:"15px",fontWeight:"600", textTransform:"uppercase"}} >Google</p>
                    <p style={{margin:"15px",fontWeight:"600", textTransform:"uppercase"}} >Internet Marketing</p>
                    <p style={{margin:"15px",fontWeight:"600", textTransform:"uppercase"}} >Advertise With Us</p>

                    <button className="btn btn-danger"  style={{margin:"15px",borderRadius:"15px" }}>Request Free Quote</button>
                    <button className="btn btn-Success" style={{margin:"15px",borderRadius:"15px" }}>Contact Us</button>
             </div>
        </div>

        </div>

        
    </div>
    </>
    );
}

export default Navbar;