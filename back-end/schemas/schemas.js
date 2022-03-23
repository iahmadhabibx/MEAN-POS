const mongoose = require("mongoose");

// User Schema & Model
const userScehma = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    contact: Number,
    address: String,
    joiningDate: String,
    totalOrders: Array,
    isActive: Boolean,
});

const User = mongoose.model('user', userScehma);

module.exports = { User };