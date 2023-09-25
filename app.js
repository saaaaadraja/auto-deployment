const express = require('express');


const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send(`<div style="width:100%;height:100vh;text-align: center;margin-top:5rem;background-color:black;">
    <img style="width:30%;margin:auto;" src="http://backend.aquabird.pk/uploads/1694720864454P1.png" alt="">
    <p style="color:white;">Accessment test...</p></div>`)
})
