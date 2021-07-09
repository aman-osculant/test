import React from 'react'
import Navbar from './components/Navbar'
import {useState, useEffect} from 'react';
import axios from 'axios'

const Profile = () => {

    
    const token1 = localStorage.getItem("token");   
    

    // console.log(token);



    const [data,setData] = useState([]);
  
    const getallcourses = async()=>{
            try{

            

           
            const res = await axios.get('http://localhost:4000/app/getuser_details')
            console.log("pass===>",res.data)
      
      
            // setData(res.data.allcourse)
  
          
            
            }catch (e){
              console.log(e);
            }
          };
      
          console.log(data);
      
      useEffect(()=>{
          getallcourses();
          
        },[]);

    return(
        <>
        <Navbar/>

        <div className="container" style={{marginTop:"70px"}}>
            <center><h1>Profile</h1></center>
            <div className="row d-flex justify-content-center" style={{marginTop:"40px"}}>
            
                <table className="table table-borderless">

                    <td>Name: </td>
                    <td>Student</td>

                    <tr></tr>
                    <td>Email:</td>
                    <td>student@gmail.com</td>

                    <tr></tr>

                    <td>About Me</td>
                    <td>No Information</td>

                    <tr></tr>

                    <td>City</td>
                    <td>Delhi</td>
                </table>

               
            </div>
            <button className="btn btn-success">Update Info</button>
        </div>
        
        </>
    );
}

export default Profile;