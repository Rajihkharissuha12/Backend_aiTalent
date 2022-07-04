const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

// Get jobs for dropdown menu
const getJobs = async (req, res) => {
  try {
    const jobs = await db.job.findMany({
      select: {
        id_job: true,
        job_name: true,
      },
    });
    if (jobs) {
      res.status(200).json({ jobs });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};

// Get job description
const getJobDesc = async (req, res) => {
  try {
    const { jobId } = req.body;
    const jobDesc = await db.job.findFirst({
      where: {
        id_job: parseInt(jobId),
      },
      select: {
        description: true,
      },
    });
    if (jobDesc) {
      res.status(200).json({ jobDesc });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};

// Get job responsibilities
const getJobRes = async (req, res) => {
  try {
    const { jobId } = req.body;
    const jobRes = await db.job.findFirst({
      where: {
        id_job: parseInt(jobId),
      },
      select: {
        tanggung_jawab: true,
      },
    });
    if (jobRes) {
      res.status(200).json({ jobRes });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};

// Get job qualification
const getJobQua = async (req, res) => {
  try {
    const { jobId } = req.body;
    const JobQua = await db.job.findFirst({
      where: {
        id_job: parseInt(jobId),
      },
      select: {
        keahlian: true,
        banner: true,
      },
    });
    if (JobQua) {
      res.status(200).json({ JobQua });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};

// Get applicant score
const getApplicantScoreByJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const score = await db.score.findMany({
      where: {
        id_job: parseInt(jobId),
      },
      select: {
        score: true,
        applicant: {
          select: {
            id_applicant: true,
            name: true,
            avatar: true,
            job: {
              select: {
                job_name: true,
              },
            },
          },
        },
      },
      orderBy: {
        score: "desc",
      },
    });
    if (score) {
      res.status(200).json({ score });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await db.job.findMany({});
    if (allJobs) {
      res.status(200).json({ allJobs });
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something Wrong" });
  }
};
module.exports = {
  getJobs,
  getJobDesc,
  getApplicantScoreByJob,
  getJobRes,
  getJobQua,
  getAllJobs,
};
