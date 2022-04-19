const express = require("express");
const router = express.Router();


const {
    getTypesSpecie,
  getIdTypesSpecie
} = require("../../controllers/catalogue/types_specie.controller");


router.route("/").get(getTypesSpecie);

router.route("/:id").get(getIdTypesSpecie);

module.exports = router;
