// src/app.js
require('dotenv').config()


const express = require('express');
const bodyParser = require('body-parser');

const userRoutes=require('./routes/useroute');
const { default: mongoose } = require('mongoose');
const { configDotenv } = require('dotenv');
const app = express();

// Middleware
app.use(bodyParser.json());



// Routes
app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("conenctsed")
}).catch((err)=>{
    console.log("er",err)
})
    

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
