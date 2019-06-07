let express = require('express');
const mongoose = require('mongoose');
const {PORT,mongoDBUrl} = require('../config/configuration')
let app = express();


// 

//configure express for body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// registering the route person.js from the route folder
let customerRoute = require('./routes/customer')
let personRoute = require('./routes/person')
app.use(personRoute)
app.use(customerRoute)


app.use((req,res,next)=>{

    res.status(404).send('page not found')
})

// configuring the public folder 
app.use(express.static('public'))

// configuring the database connection


mongoose.connect(mongoDBUrl,{useNewUrlParser:true})
        .then(response=>{
            console.log("MongoDB connected successfully "+ response);
        }).catch(err=>{
            console.log('connection to MongoDB failed '+err);
        });





// configuring the server


app.listen(PORT,()=>{

    console.log(`server is running on ${PORT}`)
})
