import React from 'react';
import img  from './blog-list-2.png';
import './index.css';
const Posts = ({ posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <>
        {posts.map(post => (
            
            <div className="col-md-4" key={post.id} style={{marginTop:"40px", marginBottom:"20px"}}>
            <div className="card" style={{padding:"20px", margin:"10px", width:"18rem", maxHeight:"30rem", minHeight:"30rem", position:"relative"}}>
                <img src={img}/>
                <h5 style={{marginTop:"10px"}}>{post.title}</h5>
                <p className="body_text" style={{marginBottom:"20px"}}>{post.body}</p>
                
                
                <button className="btn btn-outline-danger btn-sm" style={{borderRadius:"20px",position:"absolute", bottom:"10px" }}>Read More <i className="fa fa-arrow-right"></i> </button>
            </div>
            </div>

        ))}
        </>
    );
}

export default Posts;