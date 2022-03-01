const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://Deotyma:Mam2koty@cluster0.uncn9.mongodb.net/stackoverflou?retryWrites=true&w=majority",
     {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (()=>{console.log("DB conected")})
    .catch((err)=>(console.log("error of DB connection")))
