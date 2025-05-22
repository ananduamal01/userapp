const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
   userid:String,
   username:String,
   email:String
})
const userData=mongoose.model('user',userSchema);
module.exports=userData
