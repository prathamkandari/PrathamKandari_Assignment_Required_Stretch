const Student = require("../models/student");

const getAllStudent = async (req, res) => {
    const { name, techStack, fieldOfInterest, bio } = req.query;
    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }; // Use "i" for case-insensitive
    }

    if (techStack) {
        queryObject.techStack = { $regex: techStack, $options: "i" };
    }

    if (fieldOfInterest) {
        queryObject.fieldOfInterest = { $regex: fieldOfInterest, $options: "i" };
    }

    if (bio) {
        queryObject.bio = { $regex: bio, $options: "i" };
    }

    const myData = await Student.find(queryObject).sort("name");
    res.status(200).json({ myData });
};

    const getAllStudentTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getAll Products Testing" });
    };

    module.exports = { getAllStudent, getAllStudentTesting};