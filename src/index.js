const express=require("express");
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
const port=process.env.PORT || 4000;
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