const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const getJobs = async (req, res) => {
  const applicant = await db.applicant.findMany();
  res.status(200).json({ applicant: applicant });
};

module.exports = {
  getJobs,
};
