const transporter = require('../config/mailingConfig');
async function send(messageOptions){
    transporter.sendMail(messageOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent successfully!');
        }
      });
}

module.exports = {send};
