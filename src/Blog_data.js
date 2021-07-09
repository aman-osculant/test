import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Posts from './Post';
import './index.css';
import Pagination  from './Pagination';
const Blog_data = () => {

    const [data,setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    

    const getallcourses = async()=>{
            try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log("pass===>",res)
      
      
            setData(res.data);
            setLoading(false);
  
          
            
            }catch (e){
              console.log(e);
            }
          };

          useEffect(()=>{
            getallcourses();
            
          },[]);


          const indexOfLastPost = currentPage * postsPerPage;
          const indexOfFirstPost = indexOfLastPost - indexOfLastPost;
          const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


          const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            
            <Posts posts={currentPosts} loading={loading} />

            <div className="col-md-12">
            <Pagination postsPerPage = {postsPerPage} totalPosts = {data.length} paginate={paginate}/>
            </div>
        </>
    );
}


export default Blog_data;