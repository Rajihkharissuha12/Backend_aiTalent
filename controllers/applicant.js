const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

const score = async (req, res, next) => {
  try {
    const { idApplicant, idJob } = req.body;

    // cari Score yang di cari
    const findScore = await db.score.findFirst({
      where: {
        id_job: parseInt(idJob),
        id_applicant: parseInt(idApplicant),
      },
      select: {
        score: true,
        applicant: {
          select: {
            name: true,
            location: true,
            sosmed: true,
          },
        },
        job: {
          select: {
            job_name: true,
          },
        },
      },
    });
    if (findScore) {
      res.status(200).json({ findScore });
    } else {
      res
        .status(404)
        .json({ msg: `id ${idApplicant} atau ${idJob} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const pengalamanKerja = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;
    //mencari Applicant
    const findApplicant = await db.experience.findMany({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        employment: true,
        company: true,
        location: true,
        start: true,
        end: true,
      },
    });
    if (findApplicant) {
      res.status(200).json({ findApplicant });
    } else {
      res.status(404).json({ msg: `id ${idApplicant}  tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const sentimen = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;

    const findSentimen = await db.applicant.findFirst({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        sentimen: {
          select: {
            positive: true,
            negative: true,
          },
        },
      },
    });
    if (findSentimen) {
      res.status(200).json({ findSentimen });
    } else {
      res.status(404).json({ msg: `id ${idApplicant} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const keahlian = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;

    const findKeahlian = await db.score.findMany({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        score: true,
        job: {
          select: {
            job_name: true,
          },
        },
      },
    });
    if (findKeahlian) {
      res.status(200).json({ findKeahlian });
    } else {
      res.status(404).json({ msg: `id ${idApplicant} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const intolerant = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;

    const findTolerant = await db.applicant.findFirst({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        intolerant: true,
      },
    });
    if (findTolerant) {
      res.status(200).json({ findTolerant });
    } else {
      res.status(404).json({ msg: `id ${idApplicant} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const ketertarikan = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;

    const findKetertarikan = await db.ketertarikan.findFirst({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        traveling: true,
        musik: true,
        art: true,
        sport: true,
        game: true,
        cooking: true,
        beauty: true,
        social: true,
      },
    });
    if (findKetertarikan) {
      res.status(200).json({ findKetertarikan });
    } else {
      res.status(404).json({ msg: `id ${idApplicant} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const kepribadian = async (req, res, next) => {
  try {
    const { idApplicant } = req.body;

    const findKetertarikan = await db.kepribadian.findFirst({
      where: {
        id_applicant: parseInt(idApplicant),
      },
      select: {
        open: true,
        con: true,
        extra: true,
        agree: true,
        neuro: true,
      },
    });
    if (findKetertarikan) {
      res.status(200).json({ findKetertarikan });
    } else {
      res.status(404).json({ msg: `id ${idApplicant} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  score,
  pengalamanKerja,
  sentimen,
  keahlian,
  intolerant,
  ketertarikan,
  kepribadian,
};
