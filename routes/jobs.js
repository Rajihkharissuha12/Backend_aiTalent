const express = require("express");
const router = express.Router();

const jobs = require("../controllers/jobs");

router.get("/getJobs", jobs.getJobs);

module.exports = router;
