const mongoose = require('mongoose')

//Schema
const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    originalUrl:{
        type: String,
        required: true,
        unique:true,
    },
    visitHistory: [{timestamp : {type : Number}}],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
    },
}, {timestamps : true});

const URL  = mongoose.model("url",urlSchema);

module.exports = URL;