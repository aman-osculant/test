import React from 'react';
import Navbar from './components/Navbar'
import Table from './Coursetable'

const AllcreatedCourse = () =>{
  return(
    <>
    <Navbar/>

    <div className="container" style={{marginTop:"30px"}}>
    <center><h3>All Created Courses</h3></center>
    <hr/>
        <div className="row">
            <div className="col-md-12">

                <Table/>

            </div>
        </div>
    </div>

    </>
  );  
}
export default AllcreatedCourse;