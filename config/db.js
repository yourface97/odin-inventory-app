const mongoose = require('mongoose')

const URL = process.env.URL;
mongoose.set('strictQuery', false);

const db_Conn = async () => {
    try{
        await mongoose.connect(URL);
        console.log('Database connection successful')
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = { db_Conn }

