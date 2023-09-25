const express = require('express');


const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send('<div style="width:100%"><img style="width:30%;margin:auto;" src="http://backend.aquabird.pk/uploads/1694720864454P1.png" alt=""></div>')
})
