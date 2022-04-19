const express = require("express");
const router = express.Router();


const {
  deleteIdRegister,
  postRegister,
  getRegister,
  getIdRegister
} = require("../../controllers/register_animal/register_animal.controller");


router.route("/").get(getRegister);

router.route("/").post(postRegister);

router.route("/:id").delete(deleteIdRegister);

router.route("/:id").get(getIdRegister);

module.exports = router;
