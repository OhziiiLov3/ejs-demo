const express = require("express")
const app = express()
PORT = 4000

/* === ejs view engine to ejs == */

// Index page 
app.get('',(req,res)=>{
    res.render('pages/index')
});

// About Page 

app.get('/about',(req,res)=>{
    res.render('pages/about')
});



app.listen(PORT,()=>{
    console.log(`Your are on ${PORT}`);
})

