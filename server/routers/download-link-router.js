const express = require("express");
const router = express.Router();
const {
  sendEmail,
  sendWhatsappMsg,
} = require("../controllers/download-controller");

router.route("/using-email").post(sendEmail);
router.route("/using-phone-number").post(sendWhatsappMsg);

module.exports = router;
