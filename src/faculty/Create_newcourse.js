import React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar'
import axios from 'axios'
class Create_newcourse extends Component{
    constructor(){
        super()
        this.state={ 
            isLoading : false,

            isSuccess: false,

            courseID:'',
            courseName:'',
            courseDept:'',
            description:'',
            room:'',
            waitlistcapacity:'',
            team:'',
            
        }

        
        this.ChangecourseID = this.ChangecourseID.bind(this)
        this.ChangecourseName = this.ChangecourseName.bind(this)
        this.ChangecourseDept = this.ChangecourseDept.bind(this)
        this.Changedescription = this.Changedescription.bind(this)
        this.Changeroom = this.Changeroom.bind(this)
        this.Changewaitlistcapacity = this.Changewaitlistcapacity.bind(this)
        this.Changeteam = this.Changeteam.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    ChangecourseID(event){
        this.setState({
            courseID:event.target.value
        })
    }

    ChangecourseName(event){
        this.setState({
            courseName:event.target.value
        })
    }

    ChangecourseDept(event){
        this.setState({
            courseDept:event.target.value
        })
    }

    Changedescription(event){
        this.setState({
            description:event.target.value
        })
    }

    Changeroom(event){
        this.setState({
            room:event.target.value
        })
    }

    Changewaitlistcapacity(event){
        this.setState({
            waitlistcapacity:event.target.value
        })
    }

    Changeteam(event){
        this.setState({
            team:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        this.setState({ isLoading: true });

        

        

        const registered = {
            
            courseID: this.state.courseID,
            courseName: this.state.courseName,
            courseDept: this.state.courseDept,
            description: this.state.description,
            room: this.state.room,
            waitlistcapacity: this.state.waitlistcapacity,
            team: this.state.team,
        }


            axios.post('http://localhost:4000/app/createcourse', registered)
            .then(response => { console.log(response.data)
                
                this.setState({ isSuccess: true });

                this.setState({ isLoading: false });
                
            })
        
        
        }


    render(){
        return(
            <>
            <Navbar/>
            <div className="container">
                <h3 style={{marginTop:"30px", textAlign:"center"}}>Create New Course</h3>
                <hr/>
                <div className="row" style={{marginTop:"30px"}}>
                <div className="col-md-10 offset-md-2">
                    <form onSubmit={this.onSubmit}>
                        <label>Course ID</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.ChangecourseID}
                            value={this.state.courseID}
                        />

                        <label>Course Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.ChangecourseName}
                           value={this.state.courseName}
                        />

                        <label>Course Dept.</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.ChangecourseDept}
                           value={this.state.courseDept}
                        /> 

                        <label>Course Description</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.Changedescription}
                           value={this.state.description}
                        /> 

                        <label>Course Room</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.Changeroom}
                           value={this.state.room}
                        /> 

                        <label>Waitlist Capacity</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.Changewaitlistcapacity}
                           value={this.state.waitlistcapacity}
                        /> 

                        <label>Course Team</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.Changeteam}
                           value={this.state.team}
                        />  
                        <br/>

                        <button type="submit" className="btn btn-success btn-block">
                        {this.state.isLoading ? "Loading..." : "OK"}
                        </button>                                   


                        <p style={{color:"green", fontWeight:"bold"}}>{this.state.isSuccess ? "Created Successfully" : ""}</p>           
                    </form>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Create_newcourse;