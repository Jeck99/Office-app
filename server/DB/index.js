const mongoose = require('mongoose');
const STRING_CONNECTION = process.env.STRING_CONNECTION;

mongoose.connect(STRING_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose.connection;