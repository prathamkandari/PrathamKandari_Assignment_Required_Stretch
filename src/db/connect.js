const mongoose = require("mongoose");

const uri = "mongodb+srv://prathamkandari123:gA0kxfbbtH8XNjzf@cluster0.g6au8si.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("Connect DB");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;