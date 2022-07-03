const express = require("express");
const router = express.Router();

// Import controller
const jobs = require("../controllers/jobs");

// Get jobs for dropdown menu
router.get("/getJobs", jobs.getJobs);

// Get job description
router.post("/getJobDesc", jobs.getJobDesc);

// Get job responsibility
router.post("/getJobRes", jobs.getJobRes);

// Get job qualification
router.post("/getJobQua", jobs.getJobQua);

// Get applicant score
router.post("/getApplicantScoreByJob", jobs.getApplicantScoreByJob);

// Get all jobs
router.get("/getAllJobs", jobs.getAllJobs);

// Export module
module.exports = router;
