"use strict"

const express = require('express')
const app = express()
const port = process.env.port || 8001
require('dotenv').config()

app.use(express.json())

const router= require("./router/router.js"); 

const db = require("./Db/db.config"); 
db.database.sync().then(() => { 

    console.log("Synced db.") 

}).catch((err) => { 

    console.log("Failed to sync db: " + err.message); 

}); 

app.use('/create', router); 


app.listen(port,(err)=>{
    if(err){
        console.log("port is not connect : ",err);
    }else{
        console.log("listen port is : ",port);
    }
})