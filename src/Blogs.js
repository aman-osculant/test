import React from 'react';

import img  from './blog-list-1.png';

import Blog_data from './Blog_data';

const Blogs = () => {
    return(
        <>
            <div className="container" style={{position:"relative"}}>
                <div className="row" style={{marginTop:"20px", border:"1px solid lightgray",padding:"20px"}}>
                    <div className="col-md-7">
                        <img src={img} style={{width:"inherit"}} />
                    </div>
                    <div className="col-md-4">
                        <p style={{fontWeight:"bold",fontSize:"1.5rem"}}>Top Software Development Companies in London – Compare Quotes</p>
                        
                        <p>Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development</p>
                        <button className="btn btn-danger" style={{borderRadius:"20px"}}>Read More <i className="fa fa-arrow-right"></i> </button>
                    </div>

                    <Blog_data />

                    {/* <div className="col-md-4" style={{marginTop:"40px"}}>
                        <div className="card">
                        <p>aman</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Blogs;