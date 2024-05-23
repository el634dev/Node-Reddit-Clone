// Mongoose Connection
const mongoose = require('mongoose');
assert = require('assert');

const uri = "mongodb+srv://al7758066:Mbh3vrlXnPl5POyB@cluster12.mbkuvqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster12";
mongoose.connect(uri);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);
  
module.exports = mongoose.connection;
      