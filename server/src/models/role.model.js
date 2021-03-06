const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: {
            type: String,
            enum: ['ADMIN', 'USER', 'VENDOR'],
            default: 'USER',
            unique: true,
            required: true
        }
    })
);

module.exports = Role;