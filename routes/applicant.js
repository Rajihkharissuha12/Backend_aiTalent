const express = require("express");
const router = express.Router();

const applicant = require("../controllers/applicant");

router.get("/score", applicant.score);

module.exports = router;
