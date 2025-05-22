import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Add = () => {
    const [form,setForm]=useState({
    userid:'',
    name:'',
    email:'' 
  })
  // let incrementCounter=()=>{
  //   setCount(count+1)
  // }
  let submitInfo=()=>{
    console.log(form)
  }
  let valueUpdate=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
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
          name="name"
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
