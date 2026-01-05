const mongoose = require('mongoose');

async function connectDB(path){
    try{
        await mongoose.connect(path);
        console.log("Database connected successfully");
    } catch(err){
        console.log("Database connection failed", err);
    }
};

module.exports = connectDB;