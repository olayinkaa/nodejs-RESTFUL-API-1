let express = require('express');

let app = express();

// registering the route person.js from the route folder
let personRoute = require('./routes/person')
app.use(personRoute)

// configuring the public folder 
app.use(express.static('public'))




// configuring the server
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{

    console.log(`server is running on ${PORT}`)
})
