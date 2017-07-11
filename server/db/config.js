const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || 'mongodb://localhost/cyberfools';

mongoose.connect(url, {useMongoClient: true});

module.exports = mongoose;
