const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
const dotenv=require("dotenv");
dotenv.config();
require("./db/connect");
const blogRoute=require("./route/blog");
const categoryRoute=require("./route/category");
const adminRoute=require("./route/admin");

app.use(blogRoute);
app.use(categoryRoute);
app.use(adminRoute);


app.listen(port,()=>{
    console.log(`listning at ${port}`);
});