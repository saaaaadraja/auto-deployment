const express = require('express');


const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send('<div style="width:100%"><img style="width:50%;margin:auto;" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fislamabad-pakistan.html&psig=AOvVaw3YeoxFEReLy7HkvfRcyoTb&ust=1695736761257000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjstu31xYEDFQAAAAAdAAAAABAJ" alt=""></div>')
})
