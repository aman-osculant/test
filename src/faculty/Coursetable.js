import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});






export default function BasicTable() {
  const classes = useStyles();

  const [data,setData] = useState([]);

  const getallcourses = async()=>{
          try{
          const res = await axios.get('http://localhost:4000/app/getallcourses')
          console.log("pass===>",res.data)
    
    
          setData(res.data.allcourse)

        
          
          }catch (e){
            console.log(e);
          }
        };
    
        console.log(data);
    
    useEffect(()=>{
        getallcourses();
        
      },[]);



      const rows = data.map((row, index) => (

        {   

            sno: index+1 ,
            courseName:row.courseName,
            courseDept:row.courseDept,
             
             description: row.description,
             room: row.room, 
             team:row.team, 
             waitlistcapacity:row.waitlistcapacity, 
           
            
         }
     
         ));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sno.</TableCell>
            <TableCell align="right">Course ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Dept.</TableCell>
            <TableCell align="right">Course Description</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">waitlistcapacity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            
            <TableRow key={row._id}>
            <TableCell align="right">{index+1}</TableCell>
            <TableCell align="right">{row.courseID}</TableCell>
              <TableCell component="th" scope="row">
                {row.courseName}
              </TableCell>
              <TableCell align="right">{row.courseDept}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.team}</TableCell>
              <TableCell align="right">{row.waitlistcapacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
