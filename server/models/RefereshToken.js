const mongoose = require('mongoose');
const Schema = mongoose.Schema
const tokenSchema = mongoose.Schema({
    refreshToken:{
        type: String,
        default: ''
    },
    userIP: {
        type: String
    },
});
module.exports = mongoose.model('refreshtoken', tokenSchema);