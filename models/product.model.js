const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
    },
    quantity: {
        type: Number,
        required: [true, 'Please enter product quantity'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
    },
    image: {
        type: String,
        required: false,
    }
},
    {
        timestamps: true,
    }
);

// Product = Products and it'll all be small case
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;