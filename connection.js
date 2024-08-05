const mongoose = require('mongoose');

const connectToMongoDB = async (url) => {
    return mongoose.connect(url).then(()=>{console.log('MongoDB Connected')}).catch(err => console.log("Mongo Error",err));
}

module.exports = {connectToMongoDB};