import React from 'react';
import { Component } from 'react';

import Navbar from './components/Navbar'
import img from '../hero-img.png';

class Dashboard extends Component{
    render(){
        return(
            <>
            <Navbar/>
            
            <div className="row" style={{marginLeft:"0px", marginRight:"0px"}}>
                <div className="col-md-12" style={{height:"30rem", backgroundColor:"#754FFE",position:"relative"}}>
                    <div style={{marginTop:"100px", marginLeft:"180px",color:"white"}}>
                    <h1>Welcome To our Learing<br/> Application</h1>
                    <p>Hand-picked Instructor and expertly crafted courses,<br/> designed for the modern students and entrepreneur.</p>

                    <div style={{display:"flex"}}>
                    <button style={{margin:"10px"}}  className="btn btn-success">Get Start</button>
                    <button style={{margin:"10px"}} className="btn btn-light">Register New</button>
                    </div>
                    </div>

                    <img src={img} style={{width:"36rem", position:"absolute", bottom:"0", right:"100px"}} />

                </div>

                <div className="col-md-12" style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    
                   <center style={{marginTop:"20px"}}>  
                      <p><i className="fa fa-video-camera" style={{fontSize:"2.2rem", marginRight:"20px",color:"deepskyblue"}}></i>  <span style={{fontSize:"2.1rem"}}>30,000 online courses</span></p>
                      </center>
                </div>


                <div className="col-md-12" style={{marginTop:"50px"}}>
                    <h2 style={{marginLeft:"50px"}}>Recommended For you..</h2>
                    <hr/>
                </div>

                <div className="col-md-3 offset-md-1" >
                <div className="card" style={{ marginBottom:"20px"}}>
                    
                      <div className="card-body">
                      <img className="card-img-top" src="https://codescandy.com/geeks/assets/images/course/course-python.jpg" alt="Card image cap"/>
                        {/* <h5 className="card-title" style={{textAlign:"center", height:"5rem"}}>Python Course</h5> */}
                        <h3 className="card-text" style={{textAlign:"center", marginTop:"10px", color:"gray"}}>
                            The Python Course: build web application</h3>
                            <hr/>

                            <p  style={{color:"gray"}}>Price : 510</p>
                       
                      </div>
                    </div>
                </div>

                <div className="col-md-3 " >
                <div className="card" style={{ marginBottom:"20px"}}>
                    
                      <div className="card-body">
                      <img className="card-img-top" src="https://codescandy.com/geeks/assets/images/course/course-graphql.jpg" alt="Card image cap"/>
                        {/* <h5 className="card-title" style={{textAlign:"center", height:"5rem"}}>Python Course</h5> */}
                        <h3 className="card-text" style={{textAlign:"center", marginTop:"10px", color:"gray"}}>
                            The Graph Course: build web application</h3>
                            <hr/>

                            <p  style={{color:"gray"}}>Price : 510</p>
                       
                      </div>
                    </div>
                </div>

                <div className="col-md-3 " >
                <div className="card" style={{ marginBottom:"20px"}}>
                    
                      <div className="card-body">
                      <img className="card-img-top" src="https://codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="Card image cap"/>
                        {/* <h5 className="card-title" style={{textAlign:"center", height:"5rem"}}>Python Course</h5> */}
                        <h3 className="card-text" style={{textAlign:"center", marginTop:"10px", color:"gray"}}>
                            The Angular Course: build web application</h3>
                            <hr/>

                            <p style={{color:"gray"}}>Price : 510</p>
                       
                      </div>
                    </div>
                </div>


            </div>
            </>
        )

    }
}

export default Dashboard;
