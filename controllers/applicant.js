const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const score = async (req, res, next) => {
  const { idApplicant, idJob } = req.body;

  // cari Score yang di cari
  const findjob = await db.job.findUnique({
    where: {
      id: idJob,
    },
  });
  if(!findjob){
    res.status(500).json({ msg: `id job ${id} tidak ditemukan` });
  }
  // cari profil yang di cari
  const findProfil = await db.applicant.findUnique({
    where: {
      id_applicant: parseInt(id),
    },
    select: {
      name: true,
      location: true,
      score: true,
    },
    // include: {
    //   score: true,
    // },
  });

  if (!findProfil) {
    res.status(500).json({ msg: `id ${id} tidak ditemukan` });
  }
  res.status(200).json({ findProfil });
};

module.exports = { score };
