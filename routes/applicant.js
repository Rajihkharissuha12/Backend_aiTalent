const express = require("express");
const router = express.Router();

const applicant = require("../controllers/applicant");

// mengambil detail profil score
router.post("/score", applicant.score);
// mengambil detail profil pengalaman kerja
router.post("/experience", applicant.pengalamanKerja);
// memanggil detail profil sentimen
router.post("/sentimen", applicant.sentimen);
// memanggil detail profil keahlian
router.post("/keahlian", applicant.keahlian);
// memanggil detail profil tolerant
router.post("/intolerant", applicant.intolerant);
// memanggil detail profil Ketertarikan
router.post("/ketertarikan", applicant.ketertarikan);
// memanggil detail profil kepribadian
router.post("/kepribadian", applicant.kepribadian);

module.exports = router;
