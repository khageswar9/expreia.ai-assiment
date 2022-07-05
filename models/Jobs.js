const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobsSchema = new Schema({
   
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
       
    },
    ctc : {
        type : Number,
        default : "General"
    },
    Process : [
        {
            type : String
        }
    ]
  });


  module.exports = mongoose.model('jobs', JobsSchema)