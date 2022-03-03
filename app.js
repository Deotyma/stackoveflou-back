const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoDBClient = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const topicRoutes = require('./routes/topicRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res, next)=> {
    res.json({status: 200, msg: "ok"})
})

userRoutes(app);
topicRoutes(app)

app.listen(port, ()=>{
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
    MongoDBClient.initialize();
})

/* const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("./config/.env");
const port = process.env.PORT || 5000;

const { json } = require("body-parser");
const DBClient = require("./config/db");
const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res, next)=> {
    res.json({status: 200, msg: "ok"})
})

userRoutes(app);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    DBClient.initialize()
  }); */
  