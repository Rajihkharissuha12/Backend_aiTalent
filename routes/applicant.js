const express = require("express");
const router = express.Router();

const applicant = require("../controllers/applicant");

// mengambil detail profil score
router.get("/score", applicant.score);
// mengambil detail profil pengalaman kerja
router.get("/experience", applicant.pengalamanKerja);
// memanggil detail profil sentimen
router.get("/sentimen", applicant.sentimen);
// memanggil detail profil keahlian
router.get("/keahlian", applicant.keahlian);
// memanggil detail profil tolerant
router.get("/intolerant", applicant.intolerant);
// memanggil detail profil Ketertarikan
router.get("/ketertarikan", applicant.ketertarikan);
// memanggil detail profil kepribadian
router.get("/kepribadian", applicant.kepribadian);

module.exports = router;
