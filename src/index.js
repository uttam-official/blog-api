const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
const dotenv=require("dotenv");
dotenv.config();
require("./db/connect");
const router=require("./route/blog");
app.use(router);



app.listen(port,()=>{
    console.log(`listning at ${port}`);
});