const mongoose=require("mongoose");
const categorySchema=new mongoose.Schema({
    cat_name:{
        type:String,
        unique:true,
        required:true
    }
},{timestamps:true});

const Category=new mongoose.model("Categorie",categorySchema);
module.exports=Category;