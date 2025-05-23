import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
const Add = () => {
    const [form,setForm]=useState({
    userid:'',
    username:'',
    email:'' 
  });
  let navigate=useNavigate();

  // let incrementCounter=()=>{
  //   setCount(count+1)
  // }
  
  // let submitInfo=()=>{
  //   // console.log(form)
  //   axios.post('http://localhost:4000/newuser',form).then((res)=>{
  //     alert("new element added")
  //     navigate('/')
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }
  // let valueUpdate=(e)=>{
  //   setForm({...form,[e.target.name]:e.target.value})
  // }
  const location=useLocation()
  function valueUpdate(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function submitInfo() {
    if (location.state!=null) {
      axios.put('http://localhost:4000/userupdation/'+location.state.user._id,form).then((res)=> {
        alert('Data updated');

      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('http://localhost:4000/newuser',form).then((res)=> {
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }

  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        userid:location.state.user.userid,
        username:location.state.user.username,
        email:location.state.user.email,

      })
    }
  },[]) 
  return (
    <>
    <br/>
     <div>
        <TextField
          required
          id="outlined-required"
          label="UserID"
          name="userid"
          value={form.userid}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="username"
          value={form.name}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          value={form.email}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        <Button variant="contained" onClick={submitInfo}>Submit</Button>
        <br/>

        </>
  )
}
export default Add
