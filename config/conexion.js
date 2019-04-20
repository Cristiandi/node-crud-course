const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.load();

mongoose.connect(process.env.MONGO_URL, { useMongoClient: true});

module.exports = mongoose;