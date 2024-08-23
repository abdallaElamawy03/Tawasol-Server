const express = require("express")

const app = express()
// Simple api 
app.get("/",(req,res)=>res.send("server is working heh"))

// process.env.port = there is an intialized variable in 
// in heroku the process.env.port or if it is not existing it will be 5000 even you open it in localhost

const PORT = process.env.PORT || 5000 ; 
app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)

})