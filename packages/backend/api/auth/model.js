const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    googleId:{ type: String, require: true },
    displayName: { type: String, require: true },
    email:  { type: String, require: true },
    photo: { type: String, require: true },
    provider: { type: String, require: true }
});


module.exports = mongoose.model('User', userSchema);
