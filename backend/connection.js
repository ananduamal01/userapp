const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ananduamal01:52yLi2egCsShVFr2@cluster0.wdldi1w.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB connected')
}).catch((res)=>{
    console.log("DB not connected");
});