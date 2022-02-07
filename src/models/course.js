const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:{
        type: String,
        alias: 'code',
        uppercase: true
    },
    name:{
        type: String,
        required: true
    },
    description: {
        default:"",
        type: String,
    }
});

const Model = mongoose.model('Course', schema);

module.exports = Model;