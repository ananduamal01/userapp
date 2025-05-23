import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [users,setUsers]=useState([]);
  const navigate=useNavigate()

  // let users=[
  //   {
  //   userid:"a1",
  //   name:"amal",
  //   email:"zfsfy@getImageListItemBarUtilityClass.com"
  //   },

  //  {
  //   userid:"a2",
  //   name:"aman",
  //   email:"zfsfy@getImageListItemBarUtilityClass.com"

  //  },

  //  {
  //   userid:"a3",
  //   name:"akshy",
  //   email:"zfsfy@getImageListItemBarUtilityClass.com"
  //  },

  // ]
  useEffect(()=>{
      axios.get('http://localhost:4000/users').then((res)=>{
          setUsers(res.data);
      })
  },[])
  //funtion to call back end API for deletion
   let deleteUser=(id)=>{
      axios.delete('http://localhost:4000/userremoval/'+id).then((res)=>{
          window.location.reload();//to reload the current page
      }).catch((error)=>{
          console.log(error)
      })

    }
  //funtion to call back end API for update
     let updateUser=(user)=>{
      navigate('/add',{state:{user}})
   }
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userid</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.users}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userid}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={()=>{
              deleteUser(row._id)
             }} color='succes'>Delete</Button></TableCell>
             <TableCell align="right"><Button variant="contained" onClick={()=>{
                updateUser(row)
              }} color="success">Edit</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home