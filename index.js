let express= require('express');
let cors=require('cors');
let port = process.env.PORT || 3005;

let mixrouter=require("./route/mix")
let app=express();

app.use(cors());
app.use("/api",mixrouter)

app.listen(port,()=>{
    console.log('i m porting on 3001');
});