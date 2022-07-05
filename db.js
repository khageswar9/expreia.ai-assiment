const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://sunil:sunil01@cluster0.hken5b8.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo