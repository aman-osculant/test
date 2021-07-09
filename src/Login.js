import React from  'react';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';


class Login extends Component{

    constructor(){
        super()
        this.state={ 
            email:'',
            password:'',
            
        }

        // this.ChangeFullName = this.ChangeFullName.bind(this)
        // this.ChangeuserName = this.ChangeuserName.bind(this)
        this.ChangeEmail = this.ChangeEmail.bind(this)
        // this.ChangeRole = this.ChangeRole.bind(this)
        this.ChangePassword = this.ChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    ChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }


    ChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            
            email: this.state.email,
            
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/login', registered)
            .then(response => { console.log(response.data)
                
                // const history = useHistory();

                if(response.data.msg === "Successfully logged in."){
                    
                    if(response.data.data.user.role === "Faculty"){

                        window.location = '/faculty/dashboard';
                        localStorage.setItem("token", response.data.data.token);
                        console.log(response.data);

                    }else{
                        window.location = '/student/dashboard';
                        localStorage.setItem("token", response.data.data.token);
                        console.log(response.data);
                    }

                }

            })



           

            
    }

   

    render(){

        


    return(
        <>
           <div className="container-fluid" style={{height:"100vh",backgroundSize:"cover",backgroundImage:"url(https://images.unsplash.com/photo-1566670439703-41ec18cd1077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)"}}>

           <center><h1 style={{textTransform:"uppercase",color:"white", textShadow:"3px 2px black"}}>E-Learning System</h1></center>
           <hr/>
               <div className="row d-flex justify-content-center">
                   <div className="card" style={{padding:"20px", marginTop:"30px", width:"25rem"}}>
                   
                       <h3>Login!!</h3>
                   <hr/>
                   <form onSubmit={this.onSubmit}>
                       <label>Email</label>
                       <input 
                           type="text"
                           className="form-control"
                           onChange={this.ChangeEmail}
                           value={this.state.email}
                       />

                       <label>Password</label>
                       <input
                           type="text"
                           className="form-control"
                           onChange={this.ChangePassword}
                            value={this.state.password}
                       />

                       <br/>
                       <button type="submit" className="btn btn-success">Login</button>
                       </form>

                       <NavLink to="/signup"><center>Signup Here!!</center></NavLink>
                   </div>
               </div>
           </div>
        </>
    )
    }
} 

export default Login;