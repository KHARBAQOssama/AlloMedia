const mongoose = require("mongoose");
require('dotenv').config()

module.exports = ()=>{
    mongoose.connect(
                process.env.DB_URL,
                {   useNewUrlParser: true,
                    useUnifiedTopology: true    }
            ).then(console.log(`DB Connected`)).catch( res => console.log(`Error : ${res}`));
}