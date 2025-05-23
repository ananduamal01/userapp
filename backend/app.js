const express=require('express');
const app=new express();
const PORT=4000;
require('./connection')
app.use(express.json());//toensure json data can be parsed
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
//API for updation
app.put('/userupdation/:id',async (req,res)=>{
    try {
     const data= await userModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })
//server in listening mode
app.listen(PORT,()=>{
    console.log(`the server is listening at ${PORT}`);
});
app.post('/newuser',async(req,res)=>{
    try {

            var item=req.body;
            const datasave=new userModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');

    } catch (error) {
        console.log(error)
    }
})
//api for deletion
app.delete('/userremoval/:id',async(req,res)=>{
try{
        await userModel.findByIdAndDelete(req.params.id);
        res.send("deleted succesfully");
}
catch(error){
    console.log("error in deletion");
}

})