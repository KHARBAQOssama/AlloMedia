const express = require('express')
const app = express()
require('dotenv').config()
require('./config/dbConfig')();


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})