const mongoose = require('mongoose');

mongoose.connect('mongodb://root:t00rdb@ds159527.mlab.com:59527/node-crud-cali', { useMongoClient: true});

module.exports = mongoose;