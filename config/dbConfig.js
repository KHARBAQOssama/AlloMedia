const mongoose = require("mongoose");
require('dotenv').config()

module.exports =()=>{
    const server = '127.0.0.1:27017'
    const database = 'allomedia';
    // try {
    //     mongoose.connect(`mongodb://${server}/${database}`)
    //     console.log(`DB Connected`)
    // } catch (error) {
    //     console.log(`Error : ${error}`)
    // }
    // mongoose.connect(
    //             process.env.DB_URL,
    //             {   useNewUrlParser: true,
    //                 useUnifiedTopology: true    }
    //         ).then(console.log(`DB Connected`)).catch( res => console.log(`Error : ${res}`));
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      const db = mongoose.connection;
      
      db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
      });
      
      db.once('open', () => {
        console.log('Connected to MongoDB');
      });
}