const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URL,{})
.then(()=>console.log("connected"))
.catch((e)=>{
    console.log(e);
});