const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    no: String,
    type: String,
    price: Number
});

module.exports = mongoose.model('room', roomSchema, 'room');