let express=require('express');
let mixController=require("../components/mix");
let mixrouter=express.Router();

mixrouter.route('/mix')
.get(mixController.apicontroller)
module.exports=mixrouter;