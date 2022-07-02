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
    res.status(200).json({ jobs });
  } catch (err) {
    throw "Something Wrong";
  }
};

module.exports = {
  getJobs,
};
