const router=require("express").Router();
const Category=require("../model/Category");
const auth =require('../middleware/auth');

// add category
router.post("/api/category",auth,async (req,res)=>{
    try{
        const category= new Category(req.body);
        const data=await category.save();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
    }
});
//Show category
router.get("/api/category",async (req,res)=>{
    try{
        const data=await Category.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send(err);
    }
});
//Show Single Category
router.get("/api/category/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Category.findById({_id});
        res.status(200).send(data);
    }catch(err){
        res.status(500).send(err);
    }
});
//update category
router.patch("/api/category/:id",auth,async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Category.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
    }
});
//delete category
router.delete("/api/category/:id",auth,async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Category.findByIdAndDelete(_id,{new:true});
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports=router;