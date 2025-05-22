const express=require('express');
const app=new express();
const PORT=4000;
require('./connection')
const userModel=require('./model/userdata');
const cors=require('cors')
app.use(cors())
//APIfor fetching or reading the data fron the DB
app.get('/users',async(req,res)=>{
try{
    const data=await userModel.find()
    res.send(data);
}
catch(error){
    console.log("error occured");
}
});
//server in listening mode
app.listen(PORT,()=>{
    console.log(`the server is listening at ${PORT}`);
});