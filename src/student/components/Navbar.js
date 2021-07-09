import React from 'react';
import {useHistory} from 'react-router-dom';

const Navbar = () =>{

 let history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
        history.push("/");
      };

    return(
        <>
        <div className="container-fluid" style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="row">
                <div className="col-md-2 offset-md-1" style={{marginTop:"10px"}}>
                   
                    <h4>LEARNING SYSTEM </h4>
                </div>
                
                <div className="col-md-5 offset-md-4" style={{textAlign:"right", marginTop:"10px"}}>
                    <div style={{display:"flex", textAlign:"right"}}>
                       <p style={{margin:"10px", textTransform:"uppercase", fontWeight:"bold"}} onClick={ () =>{history.push("/student/dashboard")}} >Home</p>
                       <p style={{margin:"10px", textTransform:"uppercase", fontWeight:"bold"}} onClick={ () =>{history.push("/student/mycourse")}} >My Courses</p>
                       <p style={{margin:"10px", textTransform:"uppercase", fontWeight:"bold"}} onClick={ () =>{history.push("/student/register")}} >Register New Course</p>
                       <p style={{margin:"10px", textTransform:"uppercase", fontWeight:"bold"}} onClick={ () =>{history.push("/student/profile")}} >Profile</p>
                       
                       <p style={{margin:"10px", textTransform:"uppercase", fontWeight:"bold"}} onClick={logout} >Logout</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;