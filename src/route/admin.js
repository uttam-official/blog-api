const router=require('express').Router();
const Admin=require("../model/Admin");
const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");
const hashPassword=async (pass,saltRound=10)=>{
    try{
        const salt=await bcrypt.genSalt(saltRound);
        return await bcrypt.hash(pass,salt);
    }catch(err){
        console.log("Some error Occured");
        return null;
    }
};
router.post("/api/admin/registration",async (req,res)=>{
    try{
        const {username,password} = req.body;
        if(!(username && password)){
            res.status(400).json({"message":"username and password required"});
        };
        const userExist=await Admin.findOne({username:username});
        if(userExist){
            res.status(409).json({"message":"User Already Exist"});
        }else{
            const admin=await Admin.create({
                username:req.body.username,
                password:await hashPassword(req.body.password)
            });
            
            const token= jwt.sign({admin_id:admin._id,user:username},process.env.JWT_SECRET_KEY,{expiresIn:"2h"});
            admin.token=token;
            const {password,...others}=admin._doc;
            res.status(201).send(others);
        }
    }catch(err){
        res.status(500).json({"message":`Error Occured ${err}`});
    }
});
router.post("/api/admin/login",async (req,res)=>{
    try{
        const {username,password} = req.body;
        if(!(username && password)){
            res.json({"message":"username and password required"});
        }
        const admin=await Admin.findOne({username:username});
        if(admin && await bcrypt.compare(password,admin.password)){
            const token= jwt.sign({admin_id:admin._id,user:username},process.env.JWT_SECRET_KEY,{expiresIn:"2h"});
            admin.token=token;
            const {password,...others}=admin._doc;
            res.status(200).send(others);
        }else{
            res.json({"message":"Invalid Credentials"});
        }
    }catch(err){
        res.status(500).json({"message":`Error Occured ${err}`});
    }
});

module.exports =router;
