import React from 'react';

const Footer = () => {
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:'#FFFFFF'}}>
            <div className="row" style={{paddingTop:"80px"}}>
                <div className="col-md-2 offset-md-1 col-6 ">
                    <ul style={{listStyle:"none"}}>
                        <li style={{marginBottom:"10px", fontWeight:"bold"}}>HOME</li>
                        <li style={{marginBottom:"10px", fontWeight:"bold"}}>About Us</li>
                        <li style={{marginBottom:"10px", fontWeight:"bold"}}>Our Work</li>
                        <li style={{marginBottom:"10px", fontWeight:"bold"}}>FAQ's</li>
                    </ul>
                </div> 

                <div className="col-md-3 col-6">
                    
                    <ul style={{listStyle:"none"}}>
                        <li style={{marginBottom:"10px", fontWeight:"bold",fontSize:"1.4rem"}}>Services</li>
                        <li style={{marginBottom:"10px",}}><i className="fa fa-arrow-right" style={{fontWeight:"100",color:"red"}}></i> HOME</li>
                        <li style={{marginBottom:"10px",}}><i className="fa fa-arrow-right" style={{fontWeight:"100",color:"red"}}></i> About Us</li>
                        <li style={{marginBottom:"10px",}}><i className="fa fa-arrow-right" style={{fontWeight:"100",color:"red"}}></i> Our Work</li>
                        <li style={{marginBottom:"10px",}}><i className="fa fa-arrow-right" style={{fontWeight:"100",color:"red"}}></i> FAQ's</li>
                    </ul>
                </div> 


                <div className="col-md-6 col-12">
                    <h5>Contact Us</h5>
                    <table>
                        <td>Address:</td> <td>Suite 6, 17 Comalco Ct Thomastown, 3074</td>
                        <tr></tr>
                        <td>Telephone:</td> <td>03 8595 5246</td>
                        <tr></tr>
                        <td>Email: </td><td>Xyz@gmail.com</td>
                    </table>
                </div>

                <div className="col-md-12" style={{marginTop:"50px",borderTop:"1px solid gray"}}>
                    <p style={{textAlign:"center", marginTop:"30px"}}>Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529</p>
                </div>

            </div>
        </div>
        </>
    );
}

export default Footer;