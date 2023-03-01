const express = require("express")
const router = express.Router();


// Index page 
router.get('/', (req,res) =>{
    // Fake data 
    const mascots = [
      { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
      { name: "Tux", organization: "Linux", birth_year: 1996 },
      { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
    ];
    const tagline =
      "No programming concept is complete without a cute animal mascot.";
    res.render('pages/index',{
        mascots: mascots,
        tagline: tagline
    })
});

// About Page 
router.get('/about',(req,res)=>{
    res.render('pages/about')
});


module.exports = router;