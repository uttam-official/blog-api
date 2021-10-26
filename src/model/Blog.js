const mongoose=require("mongoose");
const blogSchema=new mongoose.Schema({
    imagelink:{
        type:String,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    desc:{
        type:String
    },
    category:{
        type:Array
    },
    author:{ //Admin username
        type:String,
        required:true
    }

},{timestamps:true});

const Blog=new mongoose.model("Blog",blogSchema);
module.exports=Blog;