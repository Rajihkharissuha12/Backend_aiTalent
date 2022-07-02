const express = require("express");
const router = express.Router();

const jobs = require("../controllers/jobs");

// Get jobs for dropdown menu
router.get("/getJobs", jobs.getJobs);

module.exports = router;
