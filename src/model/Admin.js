const mongoose=require('mongoose');
const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    token:{
        type:String,
    }
},{timestamps:true});

const Admin=new mongoose.model("Admin",adminSchema);
module.exports=Admin;