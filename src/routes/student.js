const express = require("express");
const router = express.Router();

const {
    getAllStudent,
    getAllStudentTesting,
    } = require("../controllers/student");

router.route("/").get(getAllStudent);

router.route("/testing").get(getAllStudentTesting);

module.exports = router;