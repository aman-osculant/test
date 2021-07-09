import React, { useState , useEffect} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Navbar = () => {

  const[show,setShow]=useState(false);

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return(
    <>
    <div className="web" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",position:"sticky",top:"0px"}}>
      <div className="row" style={{marginLeft:"0px", marginRight:"0px",height:"5rem"}}>
        <div className="col-md-2 offset-md-2 col-2 offset-0">
          { show?
            <p onClick={()=>setShow(false)} style={{position:"relative", width:"60px", height:"60px", backgroundColor:"gray",borderRadius:"50%",marginTop:"10px"}}>
            <i className="fa fa-close" style={{color:"black",fontSize:"1.7rem",position:"absolute",left:"18px", top:"17px"}}></i>
            </p>: 
            
            <p onClick={()=>setShow(true)} style={{position:"relative", width:"60px", height:"60px", backgroundColor:"gray",borderRadius:"50%",marginTop:"10px"}}>
            <i className="fa fa-bars" style={{color:"black",fontSize:"1.7rem",position:"absolute",left:"18px", top:"17px"}}></i>
            </p>
          }
        </div>
        <div className="col-md-8 col-10">
          <h2 style={{marginTop:"22px", marginLeft:"10px", textTransform:"uppercase"}}>E-Learing System</h2>
        </div>

      </div>
      </div>

      <div className="mobile" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",position:"sticky",top:"0px"}}>
      <div className="row" style={{marginLeft:"0px", marginRight:"0px",height:"4rem"}}>
        <div className="col-md-2 offset-md-1 col-2 offset-0">
          <p onClick={()=>setShow(true)} style={{position:"relative", width:"55px", height:"55px", backgroundColor:"",borderRadius:"50%",marginTop:"3px"}}>
          <i className="fa fa-bars" style={{color:"black",fontSize:"1.7rem",position:"absolute",left:"16px", top:"14px"}}></i>
          </p>
        </div>
        <div className="col-md-9 col-10" style={{textAlign:"center"}}>
          <h5 style={{marginTop:"20px",textTransform:"uppercase"}}>E-Learing System</h5>
        </div>

      </div>
      </div>


    {/* { show? */}
      <div id="myNav" className={`overlay ${show ? "show" : ""}`}>
  <h2 style={{color: "gray",marginLeft: "6%",fontWeight: "bold"}}>Faculty</h2>
  <button className="btn btn-link closebtn" style={{backgroundColor: "transparent"}} id="mobileclose" onClick={()=>setShow(false)}><i className="fa fa-arrow-left"></i></button>
  <hr style={{marginBottom:"0px"}} />

    
    <NavLink to="/faculty/dashboard" style={{textDecoration:"none"}}><p className="a" ><i className="fa fa-dashboard"></i> Dashboard</p></NavLink>

    


    <p data-toggle="collapse" data-target="#user_manage" className="a"   style={{position: "relative"}}><i className="fa fa-users"></i> Courses <i className="fa fa-caret-down" aria-hidden="true" style={{ color: "gray",position: "absolute", right: "0"}}></i></p>
    <ul className="sub-menu collapse" id="user_manage" style={{color: "gray", marginBottom: "1px", marginTop: "0px",listStyle: "none",fontSize: "0.9rem"}}>
              
                  <li>
                  <NavLink to="/faculty/createnewcourse" style={{textDecoration:"none"}}>
                  <p style={{width:"max-content", fontSize:"1rem"}} ><i className="fa fa-users"></i> Create New</p>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/faculty/allcreatedcourses" style={{textDecoration:"none"}}>

                  <p style={{width:"max-content", fontSize:"1rem"}}><i className="fa fa-users"></i> All Courses</p>
                  </NavLink>
                  </li>
    </ul>

        



    

    <p className="a" ><i className="fa fa-user"></i> Profile</p>
    
    <p className="a" onClick={logout} ><i className="fa fa-sign-out"></i> Logout</p>
    

   </div>
    
    </>
  );
};


export default Navbar;