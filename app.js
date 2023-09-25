const express = require('express');


const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send(<h2 style="width:100%;align-text:center;">This is my test express.js app....</h2>)
})
