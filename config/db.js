const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://tumi:1234@cluster0.fxnhk.mongodb.net/callofdutydb?retryWrites=true&w=majority';

const connectDB = async ()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log('Database connected');
    }catch (error) {
        console.log('Error while connecting to Mongo' + error.message)
    }
};

module.exports = connectDB;