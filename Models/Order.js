const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        index: true
    }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order