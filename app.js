// src/app.js
require('dotenv').config()


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const userRoutes=require('./routes/useroute');
const { default: mongoose } = require('mongoose');
const { configDotenv } = require('dotenv');
const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'uploads')));


// Routes
app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("conenctsed")
}).catch((err)=>{
    console.log("err in connection",err)
})
    

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
