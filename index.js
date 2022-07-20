const express =require('express');
const app=express();
const  mixrouter=require("./route/mix")
let cors=require("cors");
let port = process.env.PORT || 3005;
app.use(cors())
app.use("/api",mixrouter)

app.listen(port,()=>{
    console.log('i working on 3005');
})