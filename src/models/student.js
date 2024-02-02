const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    gravatar: {
        type: String,
        required: true,
    },
    techStack: {
        type: Array,
        required: true,
    },
    fieldOfInterest: {
        type: Array,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);