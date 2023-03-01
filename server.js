const express = require("express")
const app = express()
PORT = 4000

/* === ejs view engine to ejs == */
app.set('view engine', 'ejs')


const ejsController = require('./controllers/main')
app.use("",ejsController)


app.listen(PORT,()=>{
    console.log(`Your server is Listening on ${PORT}`);
})

