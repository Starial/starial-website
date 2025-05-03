const express = require("express");
const contact = require("../controllers/contact-controller");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-validator");

router.route("/").post(validate(contactSchema), contact);

module.exports = router;
