import React from  'react';
import { Component } from 'react';
import axios from 'axios';
// const Signup = () =>{
//     return(
//         <>
//            <div className="container">
//                <div className="row d-flex justify-content-center">
//                    <div className="card" style={{padding:"20px", marginTop:"30px", width:"25rem"}}>
//                     <h3>Sign Up!</h3>
//                     <hr/>
//                        <label>Email</label>
//                        <input 
//                            type="text"
//                            className="form-control"
//                        />

//                        <label>Name</label>
//                        <input
//                            type="text"
//                            className="form-control"
//                        />

//                         <label>Role</label>
//                         <select className="form-control">
//                             <option>---Select---</option>
//                             <option>Faculty</option>
//                             <option>Student</option>
//                         </select>

//                        <label>Password</label>
//                        <input
//                            type="text"
//                            className="form-control"
//                        />

//                        <br/>
//                        <button className="btn btn-success">Login</button>
//                    </div>
//                </div>
//            </div>
//         </>
//     );
// } 

// export default Signup;

class Signup extends Component{

        constructor(){
            super()
            this.state={

                isLoading : false,

            isSuccess: false,

            show:false,

                fullName:'',
                userName:'',
                email:'',
                password:'',
                role:'',
            }

            this.ChangeFullName = this.ChangeFullName.bind(this)
            this.ChangeuserName = this.ChangeuserName.bind(this)
            this.ChangeEmail = this.ChangeEmail.bind(this)
            this.ChangeRole = this.ChangeRole.bind(this)
            this.ChangePassword = this.ChangePassword.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
        }

        ChangeFullName(event){
            this.setState({
                fullName:event.target.value
            })
        }

        ChangeuserName(event){
            this.setState({
                userName:event.target.value
            })
        }

        ChangeEmail(event){
            this.setState({
                email:event.target.value
            })
        }

        ChangeRole(event){
            this.setState({
                role:event.target.value
            })
        }

        ChangePassword(event){
            this.setState({
                password:event.target.value
            })
        }

        onSubmit(event){
            event.preventDefault()

            this.setState({ isLoading: true });

            const registered = {
                fullName : this.state.fullName,
                username: this.state.userName,
                email: this.state.email,
                role: this.state.role,
                password: this.state.password
            }

            axios.post('http://localhost:4000/app/signup', registered)
                .then(response => {console.log(response.data)
                
                    this.setState({ isSuccess: true });

                    this.setState({ isLoading: false });

                    this.setState({ show: true });


                
                })

                
        }

    render(){
        return(
            <>
                
           <div className="container-fluid" style={{height:"100vh",backgroundSize:"cover",backgroundImage:"url(https://images.unsplash.com/photo-1566670439703-41ec18cd1077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)"}}>

<center><h1 style={{textTransform:"uppercase",color:"white", textShadow:"3px 2px black"}}>E-Learning System</h1></center>
                <div className="row d-flex justify-content-center">
                    <div className="card" style={{padding:"20px", marginTop:"30px", width:"25rem"}}>
                     <h3>Sign Up!</h3>
                     <hr/>
                     <form onSubmit ={this.onSubmit}> 
                        <label>Email</label>
                        <input 
                           type="text"
                           className="form-control"
                           onChange={this.ChangeEmail}
                           value={this.state.email}
                       />
                       <label>Name</label>
                       <input
                           type="text"
                           className="form-control"
                           onChange={this.ChangeFullName}
                            value={this.state.fullName}

                       />
                        <label>User Name</label>
                       <input
                           type="text"
                           className="form-control"
                           onChange={this.ChangeuserName}
                            value={this.state.userName}

                       />
                        <label>Role</label>
                        <select className="form-control"
                        onChange={this.ChangeRole}
                        value={this.state.role}
                        >
                            <option>---Select---</option>
                            <option>Faculty</option>
                            <option>Student</option>
                        </select>
                       <label>Password</label>
                       <input
                           type="text"
                           className="form-control"
                           onChange={this.ChangePassword}
                            value={this.state.password}

                       />
                       <br/>
                       <button type="submit" className="btn btn-success">{this.state.isSuccess ? "Created Successfully" : "Signup"}</button>
                       </form>

                       <p style={{marginTop:"20px",color:"green",fontWeight:"bold"}}>{this.state.show?"Successfully Created" : ""}</p>
                   </div>
                  
               </div>
           </div>

            </>
        )
    }
}

export default Signup;