require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("../db/connect.js");

const PORT = process.env.PORT || 5000;

const student_routes = require("../routes/student.js");

app.use(cors());
// middleware or to set router
app.use("/api/student", student_routes);

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});
const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();