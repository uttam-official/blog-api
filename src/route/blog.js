const router=require("express").Router();
const Blog=require("../model/Blog");


// CREATE NEW BLOG
router.post("/api/blog",async (req,res)=>{
    try{
        const blog= new Blog(req.body);
        const data=await blog.save();
        res.status(201).send(data);
    }catch(err){
        res.status(500).json(err);
    }
});
//VIEW ALL BLOG
router.get("/api/blog",async (req,res)=>{
    try{
        let data= await Blog.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).json(err);
    }
});
//VIEW SINGLE BLOG
router.get("/api/blog/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Blog.findById({_id});
        res.status(200).send(data);
    }catch(err){
        res.status(500).json(err);
    }
});
//UPDATE A BLOG
router.patch("/api/blog/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Blog.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(200).send(data);
    }catch(err){
        res.status(500).json(err);
    }
});
//DELETE A BLOG
router.delete("/api/blog/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Blog.findByIdAndDelete(_id,{new:true});
        res.status(200).send(data);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;