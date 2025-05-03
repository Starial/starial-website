const express = require("express");
const router = express.Router();
const { login, signUp } = require("../controllers/admin-controller");
const validate = require("../middlewares/validate-middleware");
const { loginSchema } = require("../validators/admin-validator");

router.route("/signup").post(validate(loginSchema), signUp);

router.route("/login").post(validate(loginSchema), login);

module.exports = router;
