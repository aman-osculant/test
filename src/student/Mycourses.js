import React from 'react';
import Navbar from './components/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Mycourses = ()  =>{
    const [data,setData] = useState([]);

    const getallcourses = async()=>{
            try{
            const res = await axios.get('http://localhost:4000/app/getallcourses')
            console.log("pass===>",res.data)
      
      
            setData(res.data.allcourse)
  
          
            
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
              <div className="container">
                  <div className="row">
                      <div className="col-md-12" style={{marginTop:"50px"}}>
                          <h1>My Registered Courses</h1>
                          <hr/>
                      </div>
  
                      {data.map((row, index) => (
                      <div className="col-md-3">
                          <div className="card" style={{boxShadow:"0 0 0px 0 rgb(0 0 0 / 10%), 0 0px 8px 0 rgb(0 0 0 / 19%)"}}>
                              <div className="card-body">
                                  <p style={{fontSize:"1.7rem", textTransform:"uppercase"}}>{row.courseName}</p>
                             
                              
                                  <p className="register btn btn-outline-info">View Course Details!</p>
                                  </div>
                          </div>
                      </div>
                      ))}
  
                  </div>
              </div>
              </>
          )
      }
export default Mycourses;

