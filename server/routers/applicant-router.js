const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const roleSchema = require("../validators/role-validator");
const upload = require("../cloudinary/multer");
const {
  newApplicant,
  showApplicants,
  deleteApplicant,
} = require("../controllers/applicant-controller");
const applicantSchema = require("../validators/applicant-validator");

router.route("/new").post(
  upload.single("file"),
  (req, res, next) => {
    if (req.file) {
      req.body.resumeLink = req.file.path;
      req.body.resumePublicId = req.file.filename;
    }
    next();
  },
  validate(applicantSchema),
  newApplicant
);

router.route("/").get(showApplicants);
router.route("/:id/delete").delete(deleteApplicant);

module.exports = router;
