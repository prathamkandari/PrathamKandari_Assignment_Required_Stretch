require("dotenv").config();

const connectDB = require("./db/connect");
const Student = require("./models/student");
const StudentJson = require("./student.json");
const start = async () => {
    try {
        await connectDB('mongodb+srv://prathamkandari123:gA0kxfbbtH8XNjzf@cluster0.g6au8si.mongodb.net/Cluster0?retryWrites=true&w=majority');
        await Student.create(StudentJson);
        console.log("success");
    }
    catch (error) {
        console.log(error);
    }
};
start();