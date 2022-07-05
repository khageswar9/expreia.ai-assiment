const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://khageswar9:Dellinspire123@mychatapp.ymdjs.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo
