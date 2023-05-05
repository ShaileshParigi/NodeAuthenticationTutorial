const express = require("express");
const app = express();

app.get("/page",(req,res)=>{
    res.sendFile("/page.html",{root:__dirname});
})

app.listen(5002);
