let express = require('express');
let router = express.Router()


router.get('/person/:name',(req,res)=>{

        let name = req.params.name;
        res.send(`you have requested a person ${name}`)

})








module.exports = router