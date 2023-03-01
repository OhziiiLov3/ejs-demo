const express = require("express")
const router = express.Router();


// Index page 
router.get('/', (req,res) =>{
    res.render('pages/index')
});

// About Page 
router.get('/about',(req,res)=>{
    res.render('pages/about')
});


module.exports = router;