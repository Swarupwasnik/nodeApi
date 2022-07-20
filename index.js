const express =require('express');
const app=express();
const  mixrouter=require("./route/mix")
let cors=require("cors");
app.use(cors())
app.use("/api",mixrouter)

app.listen(3005,()=>{
    console.log('i working on 3005');
})