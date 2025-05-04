const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const roleSchema = require("../validators/role-validator");
const {
  addRole,
  deleteRole,
  showRoles,
} = require("../controllers/roles-controller");
const upload = require("../cloudinary/multer");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(showRoles);
router.route("/add").post(
  authMiddleware,
  upload.single("file"),
  (req, res, next) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    if (req.file) {
      req.body.imgUrl = req.file.path;
      req.body.publicId = req.file.filename;
    }
    next();
  },
  validate(roleSchema),
  addRole
);
router.route("/:id/delete").delete(authMiddleware, deleteRole);

module.exports = router;
