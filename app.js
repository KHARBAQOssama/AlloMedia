const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');

const app = express()
require('dotenv').config()
require('./config/dbConfig')();
// const emailSender = require('./utils/emailSender');

// const messageOptions = {
//   from: 'Your Name '+process.env.MAIL_USERNAME,
//   to: 'Recipient Name ossamakharbaq4@gmail.com',
//   subject: 'This is the subject of the email',
//   text: 'This is the body of the email',
// };

// emailSender.send(messageOptions);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})