require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const curdRoute = require("./Routes/crudRoute")

const app = express();
app.use(express.json());


// local server connection
const port = process.env.port || 3005

// MongoDB connection
const URI = process.env.MONGO_URL
mongoose.connect(URI, (err, result) => {
    if(err) throw err;
    console.log("::: Successfully connected to MOngoDB:::")
})

app.use('/' , curdRoute)


app.listen(port , () => console.log(`::: Your app running in port ${port}:::`))
