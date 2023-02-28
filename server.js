const express = require("express")
const app = express()
PORT = 4000

/* === ejs view engine to ejs == */
app.set('view engine', 'ejs')

// Index page 
app.get('',(req,res)=>{
    res.render('pages/index')
});

// About Page 

app.get('/about',(req,res)=>{
    res.render('pages/about')
});



app.listen(PORT,()=>{
    console.log(`Your server is Listening on ${PORT}`);
})

