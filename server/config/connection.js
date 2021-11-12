const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myportfolio', {
});

module.exports = mongoose.connection;
